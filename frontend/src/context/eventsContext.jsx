import { createContext, useEffect, useState } from "react";
import { getAllEvents } from "../api/events.api";
import { sortEvents } from "../utils/utils";

export const eventsContext = createContext();

export const EventsProvider = ({ children }) => {

    const [events, setEvents] = useState([]);

    // guarda los eventos traidos de la API al estado global 'events'
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllEvents();
                const sortedEvents = sortEvents(data);
                setEvents(sortedEvents)
            } catch (error) {
                console.log("Error")
            }
        }
        fetchEvents();
    }, [events]);


    return (
        <eventsContext.Provider value={{ events, setEvents }}>
            {children}
        </eventsContext.Provider>
    );
}