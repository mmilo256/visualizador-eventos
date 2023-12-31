import { sortEvents } from "../utils/utils";

// Llama a la API REST y devuelve los eventos en json
export const getAllEvents = async () => {
    return fetch('http://localhost:8000/api/eventos/')
        .then(res => {
            if (!res.ok) {
                throw new Error(`La llamada falló con el código de estado ${res.status}`);
            }
            return res.json();
        })
        .then(events => {
            const sortedEvents = sortEvents(events);
            return sortedEvents;
        })
        .catch(error => {
            console.error("Error al llamar a la API.", error);
        });
}


// Eliminar un evento
export const deleteEvent = async (id) => {
    await fetch(`http://localhost:8000/api/eventos/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return fetch(`http://localhost:8000/api/eventos/`)
        .then(res => res.json())
        .then(events => {
            const sortedEvents = sortEvents(events);
            return sortedEvents;
        })
}

// Actualizar un evento
export const updateEvent = async (event) => {
    const updatedEvent = {
        titulo: event.title,
        descripcion: event.desc,
        fecha: `${event.date}T${event.time}:00Z`,
        ubicacion: event.location
    }
    console.log(updatedEvent)
    await fetch(`http://localhost:8000/api/eventos/${event.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEvent)
    })
    return fetch(`http://localhost:8000/api/eventos/`)
        .then(res => res.json())
        .then(events => {
            const sortedEvents = sortEvents(events);
            return sortedEvents;
        })
}


// Agregar un nuevo evento
export const createEvent = async (event) => {
    const newEvent = {
        titulo: event.title,
        descripcion: event.desc,
        fecha: `${event.date}T${event.time}:00Z`,
        ubicacion: event.location
    }
    await fetch('http://localhost:8000/api/eventos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    return fetch(`http://localhost:8000/api/eventos/`)
        .then(res => res.json())
        .then(events => {
            const sortedEvents = sortEvents(events);
            return sortedEvents;
        })
}