import React, {useState} from 'react';
import {QueryForm} from "./components/QueryForm";
import {IdeasForYou} from "./components/IdeasForYou";
import {sendDeleteSession, sendQuery} from "./services/ApiService";
import {Button, Card, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {Header} from "./components/Header";
import {Conversation} from "./components/Conversation";

const theme = createTheme({
    palette: {
        primary: {main: '#CECEF2'},
        secondary: {main: "#8C92EF"},
        background: {default: "#EDF3FF"}
    },
})

export interface IChat {
    question: string,
    answer: string
}

function App() {
    const [persona, setPersona] = useState("none");
    const [inputQuery, setInputQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState<Array<IChat>>([]);

    const handleQueryWithText = (question: string) => {
        setInputQuery(question)
        handleQuery(question)
    }
    const handleQuery = (question: string) => {
        setConversation(conversation.concat({
            question: question,
            answer: ""
        }))
        setLoading(true)
        sendQuery(question, persona)
            .then((res) => {
                // const conv = conversation.splice(-1, 1)
                setConversation(conversation.concat({
                    question: question,
                    answer: res.response
                }))
                localStorage.setItem("session_id", res.session_id)
                setLoading(false)
            })
            .catch((error) => {
                setConversation(conversation.concat({
                    question: question,
                    answer: "Received an error from the Knowledge Hub. Check the JS console."
                }))
                setLoading(false)
                console.error(error)
            });
    }
    const deleteSession = () => {
        sendDeleteSession().then((res) => {
            localStorage.removeItem("session_id")
        }).catch((error) => console.error(error))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Card sx={{
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                margin: 2,
                padding: 2,
                borderRadius: '0.7rem'
            }}>
                <Grid container>
                    <IdeasForYou persona={persona}
                                 inputQuery={inputQuery}
                                 onSelectQuestion={(question: string) => handleQueryWithText(question)}/>
                    <Grid item sx={{
                        maxHeight: '60vh',
                        overflow: "auto",
                        padding: 4,
                        width: 1
                    }}>
                        <Conversation conversation={conversation} loading={loading}/>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={8}>
                            <QueryForm persona={persona}
                                       inputQuery={inputQuery}
                                       onPersonaChange={(newPersona: string) => setPersona(newPersona)}
                                       onInputQueryChange={(inputText: string) => setInputQuery(inputText)}
                                       loading={loading}
                                       onSubmit={() => handleQuery(inputQuery)}
                            />
                        </Grid>
                        <Grid item xs={1} sx={{
                            marginLeft: "10px",
                            borderRadius: "8"
                        }}>
                            <Button variant="outlined" color="secondary" sx={{
                                borderRadius: 5
                            }}
                                    className="bg-focused-labs-brand-lighter-purple text-blue-dark font-semibold hover:bg-focused-labs-brand-light-purple py-2 px-4 border border-blue hover:border-transparent rounded"
                                    onClick={() => deleteSession()}>Clear Chat
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
);
}

export default App;
