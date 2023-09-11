import {
 getAuthToken,
 getSpreadSheetValues
} from './googleSheetsService.js';
import fs from 'fs'

import { groupBy, slugify } from './util.js';
import { start } from 'repl';

// const spreadsheetId = process.argv[2];
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
// const sheetName = 'test';

async function processSpreadSheetValues(sheetName) {
 try {
  const auth = await getAuthToken();
  const response = await getSpreadSheetValues({
    spreadsheetId,
    sheetName,
    auth
  })

  const columns = response.data.values.shift(1);

  const jsonArray = response.data.values
  .filter(d => d[0] !== '')
  .map(d => {
    const retObj = {};
    columns.forEach((columnKey, i) => {
      retObj[columnKey] = d[i];
    })
    return retObj
  })

  // console.log(jsonArray)

  

  return jsonArray
 } catch(error) {
   console.log(error.message, error.stack);
 }
}

const writeFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), {}, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })
}

const cleanDates = (prefix, day, month, year) => {
  const splitDaySlash = day?.split("/") || []
  const splitDayDot = day?.split(".") || []
  const splitDay = splitDaySlash.length > splitDayDot.length ? splitDaySlash : splitDayDot

  const cleanedDay = splitDay[0] && splitDay[0].length > 0 ? +splitDay[0] : undefined
  const cleanedMonth = month || splitDay?.[1]
  const cleanedYear = year || splitDay?.[2]

  return({
    [`${prefix}_day`]: cleanedDay ? +cleanedDay : undefined,
    [`${prefix}_month`]: cleanedMonth ? +cleanedMonth : undefined,
    [`${prefix}_year`]: cleanedYear ? +cleanedYear : undefined,
  })
}

async function main() {
  let people = await processSpreadSheetValues('persons_live')
  const cv = await processSpreadSheetValues('cv_live')

  const cv_filtered = cv
    .filter(({ person_id }) => !!person_id)
    .map(({ start_day, start_month, start_year, end_day, end_month, end_year, ...rest}) => {
      const start = cleanDates('start', start_day, start_month, start_year)
      const end = cleanDates('end', end_day, end_month, end_year)

      return ({
        ...rest,
        ...start,
        ...end
      })
    })
    .filter(({ start_year, end_year }) => !!start_year && !!end_year)

  console.log(`Found ${cv_filtered.length} cv entries with person_id and start and end years`)

  const cvByPerson = groupBy(cv_filtered, 'person_id');
  const cvByInstitution = groupBy(cv_filtered, 'institution_si');


  const findConnections = ({ id, person_id, institution_si, department, start_day, start_month, start_year, end_day, end_month, end_year }) => {
    const institutionConnections = cvByInstitution[institution_si];

    if (!institutionConnections || !start_year || !end_year) {
      return []
    }
    const sourceStartYear = start_month ? start_year : start_year + 1
    const sourceEndYear = end_month ? end_year : end_year - 1;

    return institutionConnections.filter((d) => {
      // check years
      if (id === d.id || person_id === d.person_id) {
        return false;
      }

      if (!!department && !!d.department && department !== d.department) {
        return false;
      }
        
      if (!d.end_year || !d.start_year) {
        return false
      }

      const targetStartYear = d.start_month ? d.start_year : d.start_year + 1
      const targetEndYear = d.end_month ? d.end_year : d.end_year - 1;

      if (targetStartYear > sourceEndYear || targetEndYear < sourceStartYear) {
        return false;
      }

      // console.log({start_day, start_month, start_year, end_day, end_month, end_year}, d)
      // if ()
      // if (d.end_month && d.end_month < ) {
      //   return false
      // }
      return true;
    }).map(({ person_id, person_name, start_year, end_year, institution_si, image_link }) => ({ person_id, person_name, start_year, end_year, institution: institution_si, image_link }))
  }

  let links = [];
  const allCV = {};

  Object.entries(cvByPerson).map(([personId, cvItems]) => {
    let connectionCount = 0
    let connectionIds = []
    
    allCV[personId] = cvItems.map((cvItem) => {
      // console.log(cvItem)
      let connections = findConnections(cvItem);
      connections = connections.map(({ person_id, ...rest }) => {
        const personData = people.find(({ id }) => id === person_id);
        // console.log(people.find(({ id }) => id === person_id), image_link);
        return ({ person_id, ...rest, image_link: personData.image_link, position: personData.position})
      })

      console.log(connections)
      // console.log('------------------')
      // console.log(personId)
      // console.log(connections.map(c => c.person_id))
      connectionIds = [...connectionIds, ...connections.map(c => c.person_id)]

      // if (personId === '157') {
      //   console.log({
      //     ...cvItem,
      //     connections
      //   });
      // }

      return ({
        ...cvItem,
        connections
      });
    })
    // console.log([...new Set(connectionIds)].length)

    const uniqueConnectionIds = [...new Set(connectionIds)]

    links = links.concat(uniqueConnectionIds.filter(id => { return +id > +personId }).map(id => ({source: personId, target: id})))

    // console.log(people[personId], personId, connectionCount)
    
    // if (people[personId]) {
    
    people.find(({id}) => id === personId).connectionCount = uniqueConnectionIds.length;

    // }
  })

  people = people.map(({ position, ...rest }) => ({ position: position.trim(), ...rest }))

  // console.log(allCV)

  

  // const connections = findConnections('Medicinska fakulteta, Univerza v Ljubljani', '2012', '2022')

  // console.log(connections)
  // console.log(Object.keys)
  // console.log(Object.keys(byInstitution).length)


  const keyedInstitutions = {}

  Object.entries(cvByInstitution).forEach(([instituion, entries]) => {
    keyedInstitutions[slugify(instituion)] = entries;
  })

  writeFile('./src/lib/data/people.json', people);
  writeFile('./src/lib/data/links.json', links);
  writeFile('./src/lib/data/institutions.json', keyedInstitutions);
  writeFile('./src/lib/data/cv.json', allCV);
}

main()