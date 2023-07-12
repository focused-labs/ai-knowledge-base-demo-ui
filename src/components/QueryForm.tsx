import React, {useState} from 'react';
import {sendQuery} from '../services/ApiService';

export function QueryForm() {
    const [inputQuery, setInputQuery] = useState('');
    const [inputRole, setInputRole] = useState('none');
    const [queryResponse, setQueryResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Developer", value: "developer"},
        {label: "UX/UI Designer", value: "designer"},
        {label: "Product Mgr", value: "pm"},
        {label: "Executive", value: "executive"},
        {label: "Client", value: "client"}
    ]

    const handleQuery = ()  => {
        setLoading(true)
        setQueryResponse("Waiting for response ...")
        sendQuery(inputQuery, inputRole)
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
        <div className="flex flex-col justify-between">
            <div className="h-20 py-3 flex flex-row border-t border-s border-e border-focused-labs-brand-light-purple rounded-t-md justify-between">
                <select
                    className="h-full basis-1/6 ml-2 border-0 rounded-md bg-focused-labs-background-lightest-blue text-focused-labs-brand-light-purple"
                    value={inputRole}
                    onChange={e => setInputRole(e.target.value)}
                    name="role">
                    {
                        roles.map((role, i) => (
                            <option key={i} value={role.value}>{role.label}</option>
                        ))
                    }
                </select>
                <input
                    type="text"
                    className="basis-4/6 ml-2 border-0 rounded-md "
                    placeholder="Ask Something"
                    name="query"
                    value={inputQuery}
                    onChange={e => setInputQuery(e.target.value)}
                    required
                />
                <input
                    type="submit"
                    className="basis-1/6 border-1 rounded-full"
                    value="Sub"
                    onClick={e => {
                        e.preventDefault();
                        handleQuery()
                    }}
                />
            </div>
            {/*<div className="min-h-full p-2 border-b border-s border-e border-focused-labs-brand-light-purple rounded-b-md">*/}
            {/*    {queryResponse}*/}
            {/*</div>*/}
            <textarea className="min-h-full p-2 border-0 border-b border-s border-e border-focused-labs-brand-light-purple rounded-b-md"
                      name="response"
                      rows={10}
                      value={queryResponse}
            />
        </div>
    );
}
