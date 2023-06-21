import React, {useState} from 'react';

export function QueryForm() {
    const [inputQuery, setInputQuery] = useState('');
    const [query, setQuery] = useState('');

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
                        setQuery(inputQuery)
                    }}>
                    Submit
                </button>
            </form>
            <form className="QueryResponse">
                <label htmlFor="response">Here's what I found:</label>
                <textarea className="query-response-text"
                          name="response"
                          value={query}
                />
            </form>
        </div>
    );
}
