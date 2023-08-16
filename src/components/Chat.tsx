import React from "react";
import {IChat} from "../App";
import {Grid, Typography, Box} from "@mui/material";
import LoadingGif from '../images/loading-non-fuzzy.gif';
import {Sources} from "./Sources";
import {commonColors} from "../styles/styles";
import {ErrorChatBubble} from "./ErrorChatBubble";
import useMediaQuery from '@mui/material/useMediaQuery';

export const Chat: React.FC<{
    chat: IChat,
    loading: boolean
}> = ({
          chat,
          loading
      }) => {

    const screenIsWide = useMediaQuery('(min-width:1100px)');

    const maxWidth = () => {
        if (screenIsWide) {
            return "50%"
        }
        return `calc(100% - 30px)`
    }

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
                        backgroundColor: commonColors.purple600,
                        color: commonColors.white,
                        borderRadius: "16px 0px 16px 16px"
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
                        <Grid container item justifyContent="center">
                            <Grid container item xs={12} justifyContent="center">
                                <Box component="img"
                                     sx={{
                                         backgroundColor: commonColors.white,
                                         width: "4.375rem",
                                     }}
                                     alt="Waiting for response ..."
                                     src={LoadingGif}
                                />
                            </Grid>
                            <Grid container item xs={12} justifyContent="center">
                                <Typography sx={{
                                    color: commonColors.purple600,
                                }}>
                                    Creating magical results ... <br/>this might take a minute!
                                </Typography>
                            </Grid>
                        </Grid>
                        :
                        <>
                            {chat.isError ? <ErrorChatBubble></ErrorChatBubble> :
                                <Typography sx={{
                                    p: 1,
                                    pl: 2,
                                    pr: 2,
                                    border: `2px solid ${commonColors.lightGray}`,
                                    borderRadius: "0px 16px 16px 16px",
                                    maxWidth: maxWidth
                                }}>
                                    {chat.answer}
                                    <Sources chat={chat} loading={loading}></Sources>
                                </Typography>
                            }
                        </>
                }
            </Grid>

        </Grid>
    )
};

