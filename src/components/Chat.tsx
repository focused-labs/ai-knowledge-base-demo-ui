import React from "react";
import {IChat} from "../App";
import {Grid, Typography, Box} from "@mui/material";
import LoadingGif from '../images/loading.gif';

export const Chat: React.FC<{
    chat: IChat,
    loading: boolean
}> = ({
          chat,
          loading
      }) => {
    return (
        <Grid container
              direction="column"
              justifyContent="between">
            <Grid item container
                  direction="row"
                  justifyContent="flex-end"
                  sx={{
                      mb: 1
                  }}>
                <Grid item>
                    <Typography sx={{
                        justifyContent: "flex-end",
                        p: 1,
                        pl: 2,
                        pr: 2,
                        backgroundColor: "#5555ff",
                        color: "#eee",
                        border: "1px solid #ddd",
                        borderRadius: 4
                    }}>
                        {chat.question}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container
                  direction="row"
                  sx={{
                      mb: 1
                  }}>
                {
                    loading && !chat.answer ?
                        <Grid item>
                            <Box component="img"
                                 sx={{
                                     backgroundColor: "#5555ff",
                                 }}
                                 alt="Waiting for response ..."
                                 src={LoadingGif}
                            />
                            <Typography sx={{
                            }}>
                                {"Creating magical results ... this might take a minute!"}
                            </Typography>
                        </Grid>
                        :
                        <Typography sx={{
                            p: 1,
                            pl: 2,
                            pr: 2,
                            border: "1px solid #ddd",
                            borderRadius: 4
                        }}>
                            {chat.answer}
                        </Typography>
                }
            </Grid>
        </Grid>
    )
};

