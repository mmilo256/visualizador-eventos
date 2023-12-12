import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useRef, useState } from 'react';
import { createEvent } from '../api/events.api';
import { eventsContext } from '../context/eventsContext';

const AddEventForm = () => {

    const { setEvents } = useContext(eventsContext);

    // Estados del formulario
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [isValid, setIsValid] = useState(false)

    const descRef = useRef(null)

    // Validación del formulario
    const validateForm = () => {
        if (title != "" && date != "" && time != "" && location != "") {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    // Resetar campos del formulario
    const resetForm = () => {
        setTitle("");
        setDate("");
        setTime("");
        setLocation("");
        descRef.current.value = "";
        setIsValid(false);
    }

    // Envío del formulario y actualiza el estado global de eventos
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            title,
            date,
            time,
            location,
            desc: descRef.current.value
        }
        createEvent(newEvent)
            .then(data => setEvents(data))
        resetForm();
        console.log("Tarea agregada.")
    };



    return (
        <form className="add-event-form">
            <h2 className="my-4">Agregar evento </h2>
            <Form.Group className="mb-3" controlId="event-title">
                <Form.Label>Título del evento <span className='text-danger'>*</span></Form.Label>
                <Form.Control type="text" placeholder="El Eventito del GOTH"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); validateForm() }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="event-date">
                <Form.Label>Fecha <span className='text-danger'>*</span></Form.Label>
                <Form.Control type="date"
                    value={date}
                    onChange={(e) => { setDate(e.target.value); validateForm() }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="event-time">
                <Form.Label>Hora de inicio <span className='text-danger'>*</span></Form.Label>
                <Form.Control type="time"
                    value={time}
                    onChange={(e) => { setTime(e.target.value); validateForm() }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="event-location">
                <Form.Label>Ubicación <span className='text-danger'>*</span></Form.Label>
                <Form.Control type="text" placeholder='Calle 123, Ciudad'
                    value={location}
                    onChange={(e) => { setLocation(e.target.value); validateForm() }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="event-desc">
                <Form.Label>Descripción</Form.Label>
                <Form.Control ref={descRef} as="textarea" rows={3} placeholder='Descripción del evento' />
            </Form.Group>
            <Button disabled={!isValid} onClick={handleSubmit} variant="primary" type="submit">
                Agregar evento
            </Button>
        </form>
    );
}

export default AddEventForm;