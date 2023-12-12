import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { editContext } from '../context/editContext';
import { updateEvent } from '../api/events.api';
import { eventsContext } from '../context/eventsContext';

const EditModal = () => {

  const { editModal, setEditModal, eventToEdit } = useContext(editContext);
  const { setEvents } = useContext(eventsContext);

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title || "")
      setDate(eventToEdit.date || "")
      setTime(eventToEdit.time || "")
      setLocation(eventToEdit.location || "")
      setDesc(eventToEdit.desc || "")
    }
  }, [eventToEdit])


  // Borra el evento y actualiza el estado global de eventos
  const editEvent = () => {
    const updatedEvent = {
      id: eventToEdit.id,
      title,
      date,
      time,
      location,
      desc
    }
    updateEvent(updatedEvent)
      .then(data => setEvents(data))
    setEditModal(false)
  }



  return (
    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={editModal} onHide={() => { setEditModal(false) }}>
      <Modal.Header closeButton>
        <Modal.Title>Editar evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="event-title">
            <Form.Label>Título del evento</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-date">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-time">
            <Form.Label>Hora de inicio</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-location">
            <Form.Label>Ubicación</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-desc">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={editEvent} variant="primary" type="submit">
          Aplicar cambios
        </Button>
      </Modal.Footer>
    </Modal >
  );
}

export default EditModal; 