import React, { useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { QueryForm } from './components/QueryForm';
import { sendDeleteSession, sendQuery } from './services/ApiService';
import { Header } from './components/Header';
import { Conversation } from './components/Conversation';

import { commonColors } from './styles/styles';
import { IPersona, personas } from './types/Personas';
import { IChat } from './types/IChat';
import { RoleSelection } from './components/RoleSelection';
import { IdeasForYou } from './components/IdeasForYou';
import { ClearChatButton } from './components/ClearChatButton';

const App = () => {
  const [persona, setPersona] = useState<IPersona>(personas.ANY_ROLE);
  const [didSelectPersona, setDidSelectPersona] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<Array<IChat>>([]);

  const handleQuery = (question: string) => {
    setConversation(
      conversation.concat({
        question,
        answer: '',
        sources: [],
        isError: false
      })
    );
    setLoading(true);
    setInputQuery('');
    sendQuery(question, persona.value)
      .then((res) => {
        setConversation(
          conversation.concat({
            question,
            answer: res.response.result,
            sources: res.response.sources,
            isError: false
          })
        );
        localStorage.setItem('session_id', res.session_id);
        setLoading(false);
      })
      .catch((error) => {
        setConversation(
          conversation.concat({
            question,
            answer: 'Received an error from the Knowledge Hub. Check the JS console.',
            sources: [],
            isError: true
          })
        );
        setLoading(false);
        console.error(error);
      });
  };

  const handleQueryWithText = (question: string) => {
    setInputQuery(question);
    handleQuery(question);
  };

  const deleteSession = () => {
    setConversation([]);
    setDidSelectPersona(false);
    sendDeleteSession()
      .then(() => {
        localStorage.removeItem('session_id');
      })
      .catch((error) => console.error(error));
  };

  const renderOnboardingMessage = () => {
    if (conversation.length !== 0) {
      return null;
    }
    if (didSelectPersona) {
      return (
        <IdeasForYou
          persona={persona}
          onSelectQuestion={(question: string) => handleQueryWithText(question)}
        />
      );
    }
    return (
      <RoleSelection
        onSelectPersona={(newPersona: IPersona) => {
          setPersona(newPersona);
          setDidSelectPersona(true);
        }}
      />
    );
  };

  return (
    <>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <Card
            sx={{
              height: {
                xs: '87vh',
                sm: '80vh'
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '0.7rem'
            }}>
            {conversation.length !== 0 && (
              <Grid
                container
                item
                sx={{ backgroundColor: `${commonColors.purple100}` }}
                alignItems="center"
                justifyContent="center"
                padding="0.25rem">
                <Typography>Current Role: {persona.label}</Typography>{' '}
              </Grid>
            )}
            <Grid
              item
              sx={{
                minHeight: '62vh',
                overflow: 'auto',
                padding: '1rem',
                width: 1
              }}>
              {renderOnboardingMessage()}
              <Conversation conversation={conversation} loading={loading} />
              {conversation.length !== 0 && !loading && (
                <Grid xs={12} container item direction="row" justifyContent="center" mt="1rem">
                  <ClearChatButton deleteSession={deleteSession} />
                </Grid>
              )}
            </Grid>

            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
              sx={{ boxShadow: '0px -3px 5px 0px #0000001F', padding: '1rem', height: '13vh' }}>
              <Grid item xs={10}>
                <QueryForm
                  inputQuery={inputQuery}
                  onInputQueryChange={(inputText: string) => setInputQuery(inputText)}
                  onSubmit={() => handleQuery(inputQuery)}
                  loading={loading}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}>
                <Typography
                  sx={{ color: commonColors.darkGray, fontSize: '0.75rem', textAlign: 'center' }}>
                  This chatbot may produce inaccurate information. Questions and responses are being
                  logged.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
    </>
  );
};

export default App;
