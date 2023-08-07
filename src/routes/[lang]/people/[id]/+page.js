import people from '$lib/data/people.json';

// export const prerender = "auto";

export async function load({ params }) {
 const { id } = params;
 return people.filter(d => d.id === id)[0];
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }