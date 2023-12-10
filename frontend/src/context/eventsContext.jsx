import { createContext, useEffect, useState } from "react";
import { getAllEvents } from "../api/events.api";

export const eventsContext = createContext();

export const EventsProvider = ({ children }) => {

    const [events, setEvents] = useState([]);

    // guarda los eventos traidos de la API al estado global 'events'
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                getAllEvents().then(res => setEvents(res));
            } catch (error) {
                console.log(error)
            }
        }

        fetchEvents();
    }, []);


    return (
        <eventsContext.Provider value={{ events, setEvents }}>
            {children}
        </eventsContext.Provider>
    );
}