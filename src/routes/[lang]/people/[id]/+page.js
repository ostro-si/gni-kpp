import people from '$lib/data/persons.json';

export async function load({ params }) {
 const { id } = params;
 return people.filter(d => d.id === id)[0];
}
