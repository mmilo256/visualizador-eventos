import { createContext, useState } from "react";

export const editContext = createContext();

export const EditProvider = ({ children }) => {
    const [editModal, setEditModal] = useState(false)
    const [eventToEdit, setEventToEdit] = useState({})

    return (
        <editContext.Provider value={{ editModal, setEditModal, eventToEdit, setEventToEdit }}>
            {children}
        </editContext.Provider>
    );
}