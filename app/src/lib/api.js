import {from, of} from 'rxjs';
import {timeout, retry, mergeMap} from 'rxjs/operators';

import config from '../config/config';


const getApiUrl = endpoint =>
    `${config.apiHost}${endpoint}`;

const performFetch = url =>
    from(fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Fetch Error.  Recieved ${response.status} from ${url}`);
            }

            return response.json();
        }));

const performApiRequest = endpoint => () => {
    const url = getApiUrl(endpoint);
    return of(url).pipe(
        mergeMap(performFetch),
        retry(2),
        timeout(3000)
    )
        
}

export const fetchRecipeList = performApiRequest('/recipes');
export const fetchRecipe = id => {
    const endpoint = `/recipes/${id}`;
    return performApiRequest(endpoint)();
}