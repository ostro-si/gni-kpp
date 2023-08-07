import institutions from '$lib/data/institutions.json';

// export const prerender = "auto";

export async function load({ params }) {
 const { id } = params;

 return ({ affiliations: institutions[id] });
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }