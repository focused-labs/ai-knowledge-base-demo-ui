import * as React from 'react';
import {AppBar, Grid, Link, Switch, Typography, useTheme} from "@mui/material";
import {commonColors, commonStyles} from "../styles/styles";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


export const Header = () => (
    <div>
        <AppBar
            position="static"
            sx={{
                background: useTheme().palette.background.default,
                height: '7vh',
                minHeight: '70px',
                paddingBottom: '.10rem',
                paddingTop: '1rem',
                boxShadow: 'none'
            }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{paddingBottom: '.25rem'}}>
                {/*<Grid item xs={0} md={1}/>*/}
                <Grid container item md={6} marginLeft='2rem'>
                    <Typography sx={{
                        color: commonColors.focusedLabsBrandPurple,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        FL
                    </Typography>
                    <Typography sx={{
                        color: commonColors.focusedLabsBrandOrange,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        &nbsp;KB Hub
                    </Typography>
                    <Typography sx={{
                        color: commonColors.focusedLabsTextSetbackGray,
                        background: commonColors.focusedLabsBackgroundLightGray,
                        fontSize: '1.8rem',
                        borderRadius: '10px',
                        padding: '0.1rem 0.5rem 0.1rem 0.5rem',
                        marginLeft: '0.5rem'
                    }}>
                        Beta
                    </Typography>
                </Grid>
                {/*<Grid container item md={5} xs={5} justifyContent="flex-end" alignItems="center" marginRight="2rem">*/}
                {/*    <LightModeOutlinedIcon/>*/}
                {/*    <Switch defaultChecked color="secondary" />*/}
                {/*</Grid>*/}
                <Grid item xs={0} md={1}/>
            </Grid>
        </AppBar>
    </div>
)