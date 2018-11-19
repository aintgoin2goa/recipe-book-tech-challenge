import {from} from 'rxjs';
import {timeout, retry} from 'rxjs/operators';

import config from '../config/config';


const getApiUrl = endpoint =>
    `${config.apiHost}${endpoint}`;

const performFetch = url =>
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${url} returned ${response.status} ${response.statusText}`);
            }

            return response.json();
        })

const performApiRequest = endpoint => () => {
    const url = getApiUrl(endpoint);
    const promise = performFetch(url);
    return from(promise).pipe(
        timeout(3000),
        retry(3)
    );
}

export const fetchRecipeList = performApiRequest('/recipes');
export const fetchRecipe = id => {
    const endpoint = `/recipes/${id}`;
    return performApiRequest(endpoint)();
}