import React, {useState} from 'react';
import {sendQuery} from '../services/ApiService';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
import {ReactComponent as EnterButton} from '../images/enterButton.svg';

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

    const handleQuery = () => {
        setLoading(true)
        setQueryResponse("Waiting for response ...")
        sendQuery(inputQuery, inputRole)
            .then((res) => {
                setLoading(false)
                setQueryResponse(res.response)
            })
            .catch((error) => {
                setLoading(false)
                setQueryResponse("Received an error from the Knowledge Hub. Check the JS console.")
                console.error(error)
            });
    }

    return (
        <div className="flex flex-col justify-between">
            <form className="h-20 py-3 flex flex-row border-2 border-focused-labs-background-light-gray rounded-md justify-between">
                <div className="ml-2 border-0 rounded-md bg-focused-labs-background-lightest-blue flex flex-row">
                    <SparkleIcon className="h-8 w-8 mt-3 ml-2 text-focused-labs-brand-purple "/>
                    <select
                        className="basis-1/6 outline-0 border-0 rounded-md bg-focused-labs-background-lightest-blue text-focused-labs-brand-light-purple"
                        value={inputRole}
                        onChange={e => setInputRole(e.target.value)}
                        name="role">
                        {
                            roles.map((role, i) => (
                                <option key={i} value={role.value}>
                                    {role.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <input
                    type="text"
                    className="basis-4/6 ml-2 border-0 rounded-md "
                    placeholder="Ask Something"
                    name="query"
                    value={inputQuery}
                    onChange={e => setInputQuery(e.target.value)}
                    required
                />
                <button
                    className="border-1 rounded-full"
                    onClick={e => {
                        e.preventDefault();
                        handleQuery()
                    }}
                >
                    <EnterButton className="mx-2"/>
                </button>
            </form>
            {queryResponse ?
                <div className="mt-2 p-2 border-2 border-focused-labs-background-light-gray rounded-md whitespace-pre-wrap">
                    {queryResponse}
                </div>
                : ''
            }
        </div>
    )
}
