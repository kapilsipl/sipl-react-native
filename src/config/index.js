/**
 * Inside this file we define all the necessary configurations
 * Like the base url and endpoints, file configuration, etc
 * Export the required settings and import them wherever required
 */

/** Define base url only once and use it everywhere */
 const BASE_URL = 'https://swapi.co/api';

 /** Export API */
export const API = {
    getPeople: `${BASE_URL}/people/` /** Define even the endpoints */
}

 /** Export FILE_CONFIG */
export const FILE_CONFIG = {
    MAX_NUMBER_OF_FILES: 5,
    MAX_FILE_SIZE: 1024 /** In KBs */
}