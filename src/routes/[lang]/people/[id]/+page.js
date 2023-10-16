
import { error } from '@sveltejs/kit';
import people from '$lib/data/people.json';
import cv from '$lib/data/cv.json';


export async function load({ params }) {
 const { id } = params;

 const bio = people.find(d => d.id === id);

 console.log(people)
 // const associatedPeople = bio

 if (!bio) {
		throw error(404, {
			message: 'Not found'
		});
	}

 // console.log(cv[id], bio)
 return ({ ...bio, cv: cv[id]})
}

// export function entries() {
//  return [
//      { lang: 'en' },
//      { lang: 'si' }
//  ];
// }