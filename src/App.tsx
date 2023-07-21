import React, {useState} from 'react';
import {QueryForm} from "./components/QueryForm";
import {commonStyles} from "./styles/styles";
import {IdeasForYou} from "./components/IdeasForYou";
import {sendQuery} from "./services/ApiService";

function App() {
    const [persona, setPersona] = useState("none");
    const [inputQuery, setInputQuery] = useState('');
    const [queryResponse, setQueryResponse] = useState('');

    const handleQueryWithText = (question: string) => {
        setInputQuery(question)
        handleQuery(question)
    }
    const handleQuery = (question: string) => {
        setQueryResponse("Waiting for response ...")
        sendQuery(question, persona)
            .then((res) => {
                setQueryResponse(res.response)
            })
            .catch((error) => {
                setQueryResponse("Received an error from the Knowledge Hub. Check the JS console.")
                console.error(error)
            });
    }

    return (
        <div className="pt-5 pl-4 max-w-2xl">
            <div className="flex flex-row justify-start mb-7">
                <div className={`${commonStyles.headerTextPurple}`}>
                    FL
                </div>
                <div className={`${commonStyles.headerTextOrange} ml-2`}>
                    KB Hub
                </div>
            </div>
            <hr className="h-1 my-8 bg-focused-labs-background-light-gray" />
            <IdeasForYou persona={persona}
                         inputQuery={inputQuery}
                         onSelectQuestion={(question: string) => handleQueryWithText(question)} />
            <hr className="h-1 my-8 bg-focused-labs-background-light-gray" />
            <QueryForm persona={persona}
                       inputQuery={inputQuery}
                       onPersonaChange={(newPersona: string) => setPersona(newPersona)}
                       onInputQueryChange={(inputText: string) => setInputQuery(inputText)}
                       queryResponse={queryResponse}
                       onSubmit={() => handleQuery(inputQuery)}/>
        </div>
    );
}

export default App;
