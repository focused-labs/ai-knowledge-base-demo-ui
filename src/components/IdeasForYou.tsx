import React from 'react';
import {Grid, Link, Typography} from "@mui/material";

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
        <Grid container item bgcolor="#EDF3FF" display="flex" flexDirection="column"
              justifyContent='between'
        sx={{
            p: 2,
            border: "1px solid #ddd",
            borderRadius: 4
        }}>
            <Grid>
                <Typography fontWeight='bold'>Ideas for you</Typography>
            </Grid>
            <Grid display="flex" flexDirection="column">
                {ideas[persona].map((idea: string, i: number) => (
                    <Link key={i}
                          sx={{cursor: 'pointer', color: '#8C92EF'}}
                          onClick={e => onSelectQuestion(idea)}
                    >{idea}</Link>
                ))
                }
            </Grid>

        </Grid>
    )
}
