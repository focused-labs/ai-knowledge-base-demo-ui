export const sendQuery = (queryText: string, role: string) =>
    fetch(`${process.env.REACT_APP_API_BASE_URL}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: queryText,
            role: role,
            session_id: localStorage.getItem("session_id")
        })
    }).then((response) => response.json());

export const sendDeleteSession = () =>
    fetch(`${process.env.REACT_APP_API_BASE_URL}/delete_session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            session_id: localStorage.getItem("session_id")
        })
    }).then((response) => response.json());
