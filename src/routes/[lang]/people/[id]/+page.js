import people from '$lib/data/people.json';
import cv from '$lib/data/cv.json';


export async function load({ params }) {
 const { id } = params;

 const bio = people.find(d => d.id === id);
 return ({ ...bio, cv: cv[id]})
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }