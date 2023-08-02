import React, {useState} from 'react';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
import {ReactComponent as EnterButton} from '../images/enterButton.svg';
import {Grid} from "@mui/material";
import LoadingGif from '../images/loading.gif';

export const QueryForm: React.FC<{
    persona: string,
    onPersonaChange: (value: string) => void,
    inputQuery: string,
    onInputQueryChange: (value: string) => void,
    loading: boolean,
    onSubmit: () => void
}> = ({
          persona,
          onPersonaChange,
          inputQuery,
          onInputQueryChange,
          loading,
          onSubmit
      }) => {

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Potential Employee", value: "candidate"},
        {label: "Potential Client", value: "client"},
    ]

    return (
        <Grid container
              sx={{width: 1}}
              direction="column"
              justifyContent="between">
            <Grid>
                <form
                    style={{
                        width: "100%"
                    }}
                    className="h-20 py-3 flex flex-row border-2 border-focused-labs-background-light-gray rounded-md justify-start">
                    <div className="ml-2 flex flex-row border-0 rounded-md bg-focused-labs-background-lightest-blue">
                        <SparkleIcon className="h-8 w-8 mt-3 ml-2 text-focused-labs-brand-purple "/>
                        <select
                            className="outline-0 border-0 rounded-md bg-focused-labs-background-lightest-blue text-focused-labs-brand-light-purple"
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
                        className="ml-2 w-full border-0 rounded-md"
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
            </Grid>
        </Grid>
    )
}
