
import { redirect } from '@sveltejs/kit';

export async function handleError({ error, event }) {
 throw redirect(302, '/si');
}