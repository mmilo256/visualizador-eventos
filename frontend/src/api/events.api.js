export const getAllEvents = () => {
    return fetch('http://localhost:8000/api/eventos/')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`)
            }
            return res.json();
        })
}