import people from '$lib/data/people.json';
import cv from '$lib/data/cv.json';

// export const prerender = "auto";

export async function load({ params }) {
 const { id } = params;

 const bio = people.filter(d => d.id === id)[0];
 return ({ ...bio, cv: cv[id]})
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }