import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Search = () => {
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
