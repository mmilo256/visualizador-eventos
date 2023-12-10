import { useContext } from "react";
import { getDateItems, sortEvents } from "../utils/utils";
import EventCard from "./EventCard";
import { eventsContext } from "../context/eventsContext";

const EventsList = () => {

    const { events } = useContext(eventsContext);
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
                        location={event.ubicacion}
                        date={{
                            day: getDateItems(event.fecha).day,
                            month: getDateItems(event.fecha).month,
                            year: getDateItems(event.fecha).year,
                            hours: getDateItems(event.fecha).hours,
                            minutes: getDateItems(event.fecha).minutes
                        }}
                    />
                ))}
            </ul>
        </main>
    );
}

export default EventsList;
