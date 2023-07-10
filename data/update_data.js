import {
 getAuthToken,
 getSpreadSheetValues
} from './googleSheetsService.js';
import fs from 'fs'

// const spreadsheetId = process.argv[2];
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
const sheetName = 'test';

async function processSpreadSheetValues() {
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

  fs.writeFile('./static/data/persons.json', JSON.stringify(jsonArray), {}, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })
 } catch(error) {
   console.log(error.message, error.stack);
 }
}

function main() {
 processSpreadSheetValues();
}

main()