import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { fetchCoordinatesByCity } from '../../services/weather-service';

const Search = () => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCoordinatesByCity('Sofia');
                setCoordinates(result);
            } catch (error) {
                console.error('Error from Search component:', error);
            }
        };

        fetchData();
    }, []);

    console.log(coordinates);

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
