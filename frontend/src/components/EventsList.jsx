import { useEffect, useState } from "react";
import { getAllEvents } from "../api/events.api";
import { getDateItems, sortEvents } from "../utils/utils";
import EventCard from "./EventCard";

const EventsList = () => {

    const [events, setEvents] = useState([])

    //LLama a la API y guarda la respuesta en el estado events
    useEffect(() => {
        getAllEvents()
            .then(data => setEvents(data));
    }, []);

    //Ordena los eventos por fecha
    const sortedEvents = sortEvents(events);

    return (
        <main className="events">
            <h2 className="my-4">Eventos registrados</h2>
            <ul className="list-unstyled">
                {sortedEvents.map(event => (
                    <EventCard
                        key={event.id}
                        title={event.titulo}
                        desc={event.descripcion}
                        date={{
                            day: getDateItems(event.fecha).day,
                            month: getDateItems(event.fecha).month,
                            year: getDateItems(event.fecha).year,
                            hours: getDateItems(event.fecha).hours,
                            minutes: getDateItems(event.fecha).minutes
                        }}
                        location={event.ubicacion}
                    />
                ))}
            </ul>
        </main>
    );
}

export default EventsList;
