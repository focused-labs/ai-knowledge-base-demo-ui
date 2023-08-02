import React from "react";
import {IChat} from "../App";
import {Grid, Typography} from "@mui/material";
import {Chat} from "./Chat";

export const Conversation: React.FC<{
    conversation: Array<IChat>,
    loading: boolean
}> = ({
          conversation,
          loading
      }) => {
    return (
        <Grid item>
            {
                conversation.map((chat: IChat, i: number) => (
                    <Chat key={i} chat={chat} loading={loading}/>
                ))
            }
        </Grid>
    )
};

