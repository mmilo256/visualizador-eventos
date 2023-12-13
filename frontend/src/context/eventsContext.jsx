import { createContext, useState } from "react";

export const eventsContext = createContext();

export const EventsProvider = ({ children }) => {

    const [events, setEvents] = useState([]);

    return (
        <eventsContext.Provider value={{ events, setEvents }}>
            {children}
        </eventsContext.Provider>
    );
}