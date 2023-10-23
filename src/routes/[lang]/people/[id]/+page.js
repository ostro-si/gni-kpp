
import { error } from '@sveltejs/kit';
import people from '$lib/data/people.json';
import cv from '$lib/data/cv.json';


export async function load({ params }) {
 const { id, lang } = params;

 const bio = people.find(d => d.id === id);
 if (!bio) {
		throw redirect(302, `/${lang}`);
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