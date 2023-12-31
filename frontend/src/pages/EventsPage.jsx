import EventsList from "../components/EventsList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddEventForm from "../components/AddEventForm";
import { RemoveProvider } from "../context/removeContext";
import { EditProvider } from "../context/editContext";


const EventsPage = () => {

    return (
        <Container>
            <Row>
                <Col md={12} lg={3}>
                    <AddEventForm />
                </Col>
                <Col md={12} lg={9}>
                    <RemoveProvider>
                        <EditProvider>
                            <EventsList />
                        </EditProvider>
                    </RemoveProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default EventsPage;

