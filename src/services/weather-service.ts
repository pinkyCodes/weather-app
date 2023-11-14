import { LIMIT_OF_LOCATIONS_IN_API_RESPONSE, OPEN_WEATHER_API_KEY, OPEN_WEATHER_GEOCODING_URL, OPEN_WEATHER_FORECAST_URL } from '../common/constants.js';

export const fetchCoordinatesByCity = async (cityName: string) => {
    const requestURL = `${OPEN_WEATHER_GEOCODING_URL}?q=${cityName}&limit=${LIMIT_OF_LOCATIONS_IN_API_RESPONSE}&appid=${OPEN_WEATHER_API_KEY}`;

    try {
        const response = await fetch(requestURL);
        const result = await response.json();

        const coordinates = [result[0].lat, result[0].lon];

        return coordinates;

    } catch (error) {
        // ако няма конзол или не обработваме по някакъв начин еръра, няма нужда от try/catch защото при фейл, то ще хвърли автоматично
        console.error('Error fetching coordinates (from service function fetchCoordinatesByCity):', error);
        throw error;
    }
};

export const fetchCityWeatherByCoordinates = async (lat: number, lon: number) => {
    const requestURL = `${OPEN_WEATHER_FORECAST_URL}lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;

    try {
        const response = await fetch(requestURL);
        const result = await response.json();

        return result;

    } catch (error) {
        console.error('Error fetching coordinates (from service function fetchCityWeatherByCoordinates):', error);
        throw error;
    }
};