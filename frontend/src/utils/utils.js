// Devuelve un objeto con cada item de la fecha
export const getDateItems = (rawDate) => {
    const date = new Date(rawDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.toLocaleString('es-ES', { month: 'long' }));
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const dateItems = {
        day: day,
        month: month,
        year: year,
        hours: hours,
        minutes: minutes
    }

    return dateItems;
}

// Ordena los eventos del más próximo al más lejano.
export const sortEvents = (eventsArray) => {
    const sortedEvents = [...eventsArray].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    return sortedEvents;
}