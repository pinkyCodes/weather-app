import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { fetchCoordinatesByCity, fetchCityWeatherByCoordinates } from '../../services/weather-service';

const Search = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const result = await fetchCoordinatesByCity('Sofia');
                setCoordinates(result);
            } catch (error) {
                console.error('Error from Search component (fetchCoordinates):', error);
            }
        };

        fetchCoordinates();
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (coordinates) {
                    const result = await fetchCityWeatherByCoordinates(coordinates[0], coordinates[1]);
                    setWeather(result);
                }
            } catch (error) {
                console.error('Error from Search component (fetchWeather):', error);
            }
        };

        fetchWeather();
    }, [coordinates]);

    console.log('From Search component (coordinates):', coordinates);
    console.log('From Search component (weather):', weather);

    return (
        <Container fluid>
            <Form className='d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search Location"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
    )
}

export default Search;
