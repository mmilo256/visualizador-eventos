import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { removeContext } from '../context/removeContext';
import { deleteEvent } from '../api/events.api';
import { eventsContext } from '../context/eventsContext';

const RemoveModal = () => {

  const { removeModal, setRemoveModal, eventToRemove } = useContext(removeContext);
  const { setEvents } = useContext(eventsContext);

  // Borra el evento y actualiza el estado global de eventos
  const removeEvent = () => {
    deleteEvent(eventToRemove.id)
      .then(data => setEvents(data))
    setRemoveModal(false)
  }

  return (
    <Modal show={removeModal} onHide={() => { setRemoveModal(false) }}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Seguro que quieres eliminar <strong>{eventToRemove.title}</strong> de la lista de eventos?</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => { setRemoveModal(false) }} variant="secondary">
          Cerrar
        </Button>
        <Button onClick={removeEvent} variant="danger">
          Eliminar evento
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RemoveModal;