import { redirect } from '@sveltejs/kit';
 
export function load({params}) {
//  console.log(params)
  throw redirect(302, '/si');
}