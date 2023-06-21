export const sendQuery = (queryText: string) =>
    fetch(`${process.env.REACT_APP_API_BASE_URL}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: queryText
        })
    }).then((response) => response.json());
