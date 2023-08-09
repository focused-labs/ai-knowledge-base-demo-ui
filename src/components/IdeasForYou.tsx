import React from 'react';
import {Button, Grid, Link, Typography} from "@mui/material";
import {commonColors} from "../styles/styles";

type IdeaMap = {
    [key: string]: string[];
};

export const IdeasForYou: React.FC<{
    persona: string,
    inputQuery: string,
    onSelectQuestion: (value: string) => void,
}> = ({persona, inputQuery, onSelectQuestion}) => {

    const ideas: IdeaMap = {
        "none": [
            "What companies has Focused Labs worked with?",
            "Tell me a brief history of Focused Labs",
            "What are Focused Labs core values?"
        ],
        "candidate": [
            "What is the company culture like?",
            "What does a typical day look like?",
            "What kinds of projects would I be working on?"
        ],
        "client": [
            "What are Focused Labs rates?",
            "What does Focused Labs process look like?",
            "I have an idea but don't know where to start. How can Focused Labs help?"
        ]
    }

    return (
        <Grid container item display="flex" flexDirection="column"
              justifyContent='between'
              sx={{
                  p: 2,
                  borderRadius: 4,
                  backgroundColor: commonColors.purple50
              }}>
            <Grid>
                <Typography fontWeight='700' paddingLeft="0.5rem" color={commonColors.black}>Ideas for you</Typography>
            </Grid>
            <Grid display="flex" flexDirection="column" alignItems="flex-start">
                {ideas[persona].map((idea: string, i: number) => (
                    <Button key={i}
                            sx={{
                                textAlign: 'left',
                                textTransform: 'none',
                                cursor: 'pointer',
                                color: commonColors.purple600,
                            }}
                            onClick={e => onSelectQuestion(idea)}
                    >{idea}</Button>
                ))
                }
            </Grid>

        </Grid>
    )
}
