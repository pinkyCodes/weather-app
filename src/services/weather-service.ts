/* 
Parameters
q	required	City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
limit	optional	Number of the locations in the API response (up to 5 results can be returned in the API response) 
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
*/

import { LIMIT_OF_LOCATIONS_IN_API_RESPONSE, OPEN_WEATHER_API_KEY, OPEN_WEATHER_GEOCODING_URL } from '../common/constants.js';

export const fetchCoordinatesByCity = async (cityName: string) => {
    const requestURL = `${OPEN_WEATHER_GEOCODING_URL}?q=${cityName}&limit=${LIMIT_OF_LOCATIONS_IN_API_RESPONSE}&appid=${OPEN_WEATHER_API_KEY}`;

    try {
        const response = await fetch(requestURL);
        const result = await response.json(); // array with obj

        // console.log(result);
        
        const lat = result[0].lat;
        const lon = result[0].lon;

        return `${lat} ${lon}`;
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};
