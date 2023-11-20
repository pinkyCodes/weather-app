import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export interface WeatherOverviewProps {
    cityName: string;
    country: string;
    temperature: number;
    imgURL: string;
    celsius: boolean;
}

const WeatherOverview = ({ cityName, country, temperature, imgURL, celsius }: WeatherOverviewProps) => {

    return (
        <Container style={{ maxWidth: '600px', maxHeight: '300px' }}>
            <Card className="bg-dark text-white" >
                <Card.Img src='src/assets/photo-sofia.avif' alt="Card image" />
                {/* <Card.Img src={imgURL} alt="Card image" /> use this after unsplash API integration :) */}
                <Card.ImgOverlay>
                    <Card.Title className='display-4'>{cityName}, {country}</Card.Title>
                    <Card.Body className='display-6'>{temperature} C</Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Container >
    );
};

export default WeatherOverview;
