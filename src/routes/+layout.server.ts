import { error } from '@sveltejs/kit';
import {fetchFromCMS} from '$lib/ultiltyFunctions.js'
export const load = async ({ params }) => {
    let slug = params.slug ? params.slug : "Home";
    let query = encodeURIComponent('{"Page Title":"'+slug+'"}');
    let url = "http://cockpit.com/api/content/item/Page?filter=" + query;
    let response = await fetchFromCMS(url, "GET");
    console.log(response);
        if (!response) {
            error(404, {
                message: 'Not found'
            });
        }
    console.log(slug, response, query);
    return {
                post: response
        };
};