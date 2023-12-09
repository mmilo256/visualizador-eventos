import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";

const EventCard = (props) => {

    const fullDate = `${props.date.day} de ${props.date.month} del ${props.date.year} a las ${props.date.hours}:${props.date.minutes} hrs.`;

    return (
        <li >
            <Container className='mb-3'>
                <Card>
                    <Row>
                        <Col className='p-0'>
                            <Card.Body className='d-flex flex-column h-100 align-items-center justify-content-center bg-dark text-white'>
                                <p className='m-0 fs-1 fw-bold'>{props.date.day}</p>
                                <p className='m-0 fs-4 text-capitalize'>{props.date.month}</p>
                            </Card.Body></Col>
                        <Col className='px-2' xs={10}>
                            <Card.Body>
                                <Stack direction="horizontal" className='border-bottom mb-3'>
                                    <Card.Title>
                                        {props.title}
                                    </Card.Title>
                                    <Stack direction="horizontal" gap={2} className="ms-auto mb-2">
                                        <Button variant="warning">Editar</Button>
                                        <Button variant="danger">Eliminar</Button>
                                    </Stack>
                                </Stack>
                                <Card.Subtitle className='fw-light mb-2'><FaCalendarDay /> {fullDate}</Card.Subtitle>
                                <Card.Subtitle className='fw-light mb-2'><FaLocationDot /> {props.location}</Card.Subtitle>
                                <Card.Text>{props.desc}</Card.Text>
                            </Card.Body></Col>
                    </Row>
                </Card>
            </Container>
        </li>
    );
}

export default EventCard;