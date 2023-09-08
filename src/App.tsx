import React, {useState} from 'react';
import {QueryForm} from './components/QueryForm';
import {IdeasForYou} from './components/IdeasForYou';
import {sendDeleteSession, sendQuery} from './services/ApiService';
import {Button, Card, Grid, SvgIcon, Typography} from '@mui/material';
import {Header} from './components/Header';
import {Conversation} from './components/Conversation';
import {ReactComponent as Trash} from './images/Trash.svg';
import {commonColors} from './styles/styles';
import {getPersona, IPersona, personas} from "./types/Personas";

export interface IChat {
    question: string,
    answer: string,
    sources: Source[],
    isError: boolean
}

export interface Source {
    URL?: string,
    title?: string;
}

function App() {
    const [persona, setPersona] = useState<IPersona>(personas.ANY_ROLE);
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
            answer: '',
            sources: [],
            isError: false,
        }))
        setLoading(true)
        setInputQuery('')
        sendQuery(question, persona.value)
            .then((res) => {
                setConversation(conversation.concat({
                    question: question,
                    answer: res.response.result,
                    sources: res.response.sources,
                    isError: false,
                }))
                localStorage.setItem('session_id', res.session_id)
                setLoading(false)
            })
            .catch((error) => {
                setConversation(conversation.concat({
                    question: question,
                    answer: 'Received an error from the Knowledge Hub. Check the JS console.',
                    sources: [],
                    isError: true,
                }))
                setLoading(false)
                console.error(error)
            });
    }
    const deleteSession = () => {
        setConversation([])
        sendDeleteSession().then(() => {
            localStorage.removeItem('session_id')
        }).catch((error) => console.error(error))
    }

    return (
        <>
            <Header/>
            <Grid container justifyContent={'center'}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card sx={{
                        height: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 2,
                        paddingTop: 3,
                        paddingBottom: 2,
                        borderRadius: '0.7rem',
                    }}>
                        <Grid>
                            <Grid item sx={{
                                height: '65vh',
                                overflow: 'auto',
                                padding: 4,
                                width: 1
                            }}>
                                {conversation.length === 0 ?
                                    <IdeasForYou persona={persona}
                                                 onSelectQuestion={(question: string) => handleQueryWithText(question)}
                                    />
                                    :
                                    ''
                                }
                                <Conversation conversation={conversation} loading={loading}/>
                            </Grid>
                            <Grid container item direction='row' justifyContent='center'
                                  alignItems={'center'}
                                  sx={{boxShadow: '0px -3px 5px 0px #0000001F', padding: '1rem', height: '13vh'}}>
                                <Grid item xs={8}>
                                    <QueryForm persona={persona}
                                               inputQuery={inputQuery}
                                               onPersonaChange={(newPersonaValue: string) => setPersona(getPersona(newPersonaValue))}
                                               onInputQueryChange={(inputText: string) => setInputQuery(inputText)}
                                               onSubmit={() => handleQuery(inputQuery)}
                                               loading={loading}
                                    />
                                </Grid>
                                <Grid item xs={1} sx={{
                                    marginLeft: '10px',
                                    borderRadius: '8'
                                }}>
                                    <Button variant='outlined' sx={{
                                        color: commonColors.purple600,
                                        borderRadius: 5,
                                        borderColor: commonColors.purple600,
                                        textTransform: 'none',
                                        padding: '.5rem 1.375rem',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            backgroundColor: commonColors.purple100
                                        },
                                        '&:active': {
                                            backgroundColor: commonColors.purple200,
                                        },
                                    }} onClick={() => deleteSession()}>
                                        <SvgIcon sx={{
                                            ml: '-.2rem',
                                            mr: '.5rem'
                                        }}>
                                            <Trash/>
                                        </SvgIcon>
                                        <Typography sx={{
                                            whiteSpace: 'nowrap'
                                        }}>Clear Chat</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container direction={'row'} justifyContent={'center'} item>
                                <Typography sx={{color: commonColors.darkGray, fontSize: '0.75rem', m: '1rem'}}>
                                    Questions and responses are being logged. The Hub may produce inaccurate
                                    information.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    );
}

export default App;
