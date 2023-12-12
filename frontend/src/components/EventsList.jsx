import { useContext, useEffect } from "react";
import { getDateItems } from "../utils/utils";
import EventCard from "./EventCard";
import { eventsContext } from "../context/eventsContext";
import { getAllEvents } from "../api/events.api";
import RemoveModal from "./RemoveModal";
import EditModal from "./editModal";

const EventsList = () => {

    const { events, setEvents } = useContext(eventsContext);

    // Actualiza la lista de eventos
    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await getAllEvents();
            await setEvents(fetchedEvents);
        }
        fetchEvents();
    }, []);


    return (
        <main className="events">
            <h2 className="my-4">Eventos registrados <span className="text-muted">{events.length}</span> </h2>
            <ul className="list-unstyled">
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.titulo}
                        desc={event.descripcion}
                        location={event.ubicacion}
                        date={{
                            day: getDateItems(event.fecha).day,
                            month: getDateItems(event.fecha).month,
                            monthShort: getDateItems(event.fecha).monthShort,
                            year: getDateItems(event.fecha).year,
                            hours: getDateItems(event.fecha).hours,
                            minutes: getDateItems(event.fecha).minutes
                        }}
                    />
                ))}
            </ul>
            <RemoveModal />
            <EditModal />
        </main>
    );
}

export default EventsList;
