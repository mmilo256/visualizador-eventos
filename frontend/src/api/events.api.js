// Llama a la API REST y devuelve los eventos en json
export const getAllEvents = async () => {
    return fetch('http://localhost:8000/api/eventos/')
        .then(res => {
            if (!res.ok) {
                throw new Error(`La llamada falló con el código de estado ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error("Error al llamar a la API.", error);
        });
}

export const createEvent = (event) => {
    const newEvent = {
        titulo: event.title,
        descripcion: event.desc,
        fecha: `${event.date}T${event.time}:00Z`,
        ubicacion: event.location
    }
    fetch('http://localhost:8000/api/eventos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
}