import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";
import { useContext } from 'react';
import { removeContext } from '../context/removeContext';

const EventCard = (props) => {

  // Estados del modal de eliminación de evento
  const { setRemoveModal, eventToRemove, setEventToRemove } = useContext(removeContext);

  // Fecha completa
  const fullDate = `${props.date.day} de ${props.date.month} del ${props.date.year} a las ${props.date.hours}:${props.date.minutes} hrs.`;


  // Abrir modal y pasar ID y título del evento a eliminar
  const openRemoveModal = () => {
    setEventToRemove({ ...eventToRemove, id: props.id, title: props.title })
    setRemoveModal(true)
  }

  return (
    <>
      <li >
        <Container className='mb-3'>
          <Card>
            <Row>
              <Col className='p-0' md={4} lg={2}>
                <Card.Body className='d-flex flex-column h-100 align-items-center justify-content-center bg-dark text-white'>
                  <p className='m-0 fs-1 fw-bold'>{props.date.day}</p>
                  <p className='m-0 fs-4 text-capitalize'>{props.date.month}</p>
                </Card.Body></Col>
              <Col className='px-2' md={8} lg={10}>
                <Card.Body>
                  <div className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-between border-bottom pb-3 mb-3'>
                    <Card.Title className='text-center'>
                      {props.title}
                    </Card.Title>
                    <div className='d-flex gap-2'>
                      <Button variant="warning">Editar</Button>
                      <Button onClick={openRemoveModal} variant="danger">Eliminar</Button>
                    </div>
                  </div>
                  <Card.Subtitle className='fw-light mb-2'><FaCalendarDay /> {fullDate}</Card.Subtitle>
                  <Card.Subtitle className='fw-light mb-2'><FaLocationDot /> {props.location}</Card.Subtitle>
                  <Card.Text>{props.desc}</Card.Text>
                </Card.Body></Col>
            </Row>
          </Card>
        </Container>
      </li>
    </>
  );
}

export default EventCard;