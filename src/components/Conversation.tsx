import React, {useEffect, useRef} from "react";
import {IChat} from "../App";
import {Grid} from "@mui/material";
import {Chat} from "./Chat";

export const Conversation: React.FC<{
    conversation: Array<IChat>,
    loading: boolean
}> = ({
          conversation,
          loading
      }) => {

    const LastMessage = () => {
        const lastMessageRef: React.MutableRefObject<any> = useRef()
        useEffect(() => lastMessageRef.current.scrollIntoView())
        return <div ref={lastMessageRef} />
    }

    return (
        <Grid item>
            {
                conversation.map((chat: IChat, i: number) => (
                    <Chat key={i} chat={chat} loading={loading}/>
                ))
            }
            <LastMessage />
        </Grid>
    )
};

