export const groupBy = function(xs, key) {
 return xs.reduce(function(rv, x) {
   (rv[x[key]] = rv[x[key]] || []).push(x);
   return rv;
 }, {});
};

export const slugify = (str) => {
 return String(str)
   .normalize('NFKD') // split accented characters into their base characters and diacritical marks
   .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
   .trim() // trim leading or trailing whitespace
   .toLowerCase() // convert to lowercase
   .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
   .replace(/\s+/g, '-') // replace spaces with hyphens
   .replace(/-+/g, '-'); // remove consecutive hyphens
}

export const colors = {
  pm: '#4600BE',
  minister: '#1599D0',
  secretary: '#31C8B0',
  mp: '#ACEC5A'
}

export const getColor = (key) => {
  // console.log(key, colors['minister'])
  return colors[key];
}

export const getTextColor = (key) => {
  if (key === 'pm') {
    return '#fff';
  }
  return "#00001E"
}

export const getDateYear = dateString => {
  if (!dateString) return;

  return new Date(dateString).getFullYear();
}

export const getDate = dateString => {

  console.log('in get date', dateString)
  if (!dateString) return;

  const date = new Date(dateString);
  console.log('in get date', dateString, date)


  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const getTimeSince = dateString => {
  if (!dateString) return;

  const difference = new Date() - new Date(dateString);
  const days = Math.floor(difference / 86400000)
  const years = days/365


  if (years < 1) {
    return `${days} days`
  }

  return `${Math.floor(years)} years and ${days%365} days`
}


export const arrayUniqueById = (arr, key) => {

  const map = new Map(arr.map(o => [o[key],o]));
  return [...map.values()];
}

export const tField = (datum, field, locale) => {
  // console.log(datum, field, locale)
  if (locale === 'en') {
    const enFieldValue = datum[`${field}_en`]
    
    if (enFieldValue?.length > 0) {
      return enFieldValue;
    }
  }
  
  return datum[`${field}_si`]
}

export const getInitials = name => {
  if (!name) return null;

  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();

  return initials
}

export const getYearsLabel = (item, presentPlaceholder) => {
  console.log(item)

  if (item.start_year === item.end_year) {
    return item.start_year
  }

  return `${item.start_year} - ${item.end_year === 2100 ? presentPlaceholder : item.end_year}`
}