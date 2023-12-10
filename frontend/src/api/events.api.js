// Llama a la API REST y devuelve los eventos en json
export const getAllEvents = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/eventos/');
        //console.log(response); // Verifica la respuesta completa
        const data = await response.json();
        //console.log(data); // Verifica el cuerpo de la respuesta
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

export const createEvent = (event) => {
    fetch('http://localhost:8000/api/eventos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
}