import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from '../search/search';
import TimeAndDate from '../time-and-date/time-and-date';

const NavigationBar = () => {
    return (
        <>
            <Navbar expand='sm' className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#home">Sky Symphony</Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-sm'
                        aria-labelledby='offcanvasNavbarLabel-expand-sm'
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                                What would you like to do?
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Search />
                            <TimeAndDate />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
