import React, {useState} from 'react';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
import {ReactComponent as EnterButton} from '../images/enterButton.svg';

export const QueryForm: React.FC<{
    persona: string,
    onPersonaChange: (value: string) => void,
    inputQuery: string,
    onInputQueryChange: (value: string) => void,
    queryResponse: string,
    onSubmit: () => void
}> = ({
          persona,
          onPersonaChange,
          inputQuery,
          onInputQueryChange,
          queryResponse,
          onSubmit
      }) => {

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Potential Employee", value: "candidate"},
        {label: "Potential Client", value: "client"},
    ]

    return (
        <div className="flex flex-col justify-between">
            <form
                className="h-20 py-3 flex flex-row border-2 border-focused-labs-background-light-gray rounded-md justify-between">
                <div className="ml-2 border-0 rounded-md bg-focused-labs-background-lightest-blue flex flex-row">
                    <SparkleIcon className="h-8 w-8 mt-3 ml-2 text-focused-labs-brand-purple "/>
                    <select
                        className="basis-1/6 outline-0 border-0 rounded-md bg-focused-labs-background-lightest-blue text-focused-labs-brand-light-purple"
                        value={persona}
                        onChange={e => onPersonaChange(e.target.value)}
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
                    onChange={e => onInputQueryChange(e.target.value)}
                    required
                />
                <button
                    className="border-1 rounded-full"
                    onClick={e => {
                        e.preventDefault();
                        onSubmit()
                    }}
                >
                    <EnterButton className="mx-2"/>
                </button>
            </form>
            {queryResponse ?
                <div
                    className="mt-2 p-2 border-2 border-focused-labs-background-light-gray rounded-md whitespace-pre-wrap">
                    {queryResponse}
                </div>
                : ''
            }
        </div>
    )
}
