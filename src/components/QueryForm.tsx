import React, {useState} from 'react';
import {sendQuery} from '../services/ApiService';

export function QueryForm() {
    const [inputQuery, setInputQuery] = useState('');
    const [queryResponse, setQueryResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleQuery = ()  => {
        setLoading(true)
        setQueryResponse("Waiting for response ...")
        sendQuery(inputQuery)
            .then((res) => {
                // console.log("received response")
                setLoading(false)
                setQueryResponse(res.response.response)
            })
            .catch((error) => {
                setLoading(false)
                setQueryResponse("Received an error from the Knowledge Hub. Check the JS console.")
                console.error(error)
            });
    }

    return (
        <div className="QueryForm">
            <form>
                <label htmlFor="query">What do you want to know?</label>
                <input
                    type="text"
                    className="vertical-form-input"
                    name="query"
                    value={inputQuery}
                    onChange={e => setInputQuery(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="vertical-form-button"
                    onClick={e => {
                        e.preventDefault();
                        handleQuery()
                    }}>
                    Submit
                </button>
            </form>
            <form className="QueryResponse">
                <label htmlFor="response">Here's what I found:</label>
                <textarea className="query-response-text"
                          name="response"
                          value={queryResponse}
                />
                {/*          name="response"*/}
                {/*          value={queryResponse}
                {/*{loading && <p>Loading</p>}*/}
                {/*{!loading && <textarea className="query-response-text"*/}
                {/*          name="response"*/}
                {/*          value={queryResponse}*/}
                {/*/>}*/}
            </form>
        </div>
    );
}
