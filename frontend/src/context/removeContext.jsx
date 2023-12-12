import { createContext, useState } from "react";

export const removeContext = createContext();

export const RemoveProvider = ({ children }) => {
    const [removeModal, setRemoveModal] = useState(false)
    const [eventToRemove, setEventToRemove] = useState({})

    return (
        <removeContext.Provider value={{ removeModal, setRemoveModal, eventToRemove, setEventToRemove }}>
            {children}
        </removeContext.Provider>
    );
}