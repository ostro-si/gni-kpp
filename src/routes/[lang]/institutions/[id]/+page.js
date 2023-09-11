import institutions from '$lib/data/institutions.json';
import people from '$lib/data/people.json';


// export const prerender = "auto";

export async function load({ params }) {
 const { id } = params;

 const affiliations = institutions[id]

 const associatedPeople = affiliations.map(({ person_id }) => people.find(d => d.id === person_id))

 return ({ affiliations, associatedPeople });
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }