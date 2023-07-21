import React from 'react';
import {commonStyles} from "../styles/styles";

export const IdeasForYou: React.FC<{
    persona: string,
    inputQuery: string,
    onSelectQuestion: (value: string) => void,
}> = ({persona, inputQuery, onSelectQuestion}) => {

    const ideas = {
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
        <div className="pt-5 pl-4 max-w-2xl">
            <div className={`${commonStyles.headerTextSetback}`}>
                Ideas for you
            </div>
            <div className={`${commonStyles.textFocused} flex flex-col`}>
                {
                    // @ts-ignore
                    ideas[persona].map((idea: string, i: number) => (
                        <a key={i}
                           className="py-2 cursor-pointer"
                           onClick={e => onSelectQuestion(idea)}
                        >{idea}</a>
                    ))
                }
            </div>
        </div>
    )
}
