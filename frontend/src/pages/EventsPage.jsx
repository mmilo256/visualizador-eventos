import EventsList from "../components/EventsList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EventsPage = () => {

    return (
        <Container>
            <Row>
                <Col sm={12} md={9}>
                    <EventsList />
                </Col>
            </Row>
        </Container>
    );
}

export default EventsPage;

