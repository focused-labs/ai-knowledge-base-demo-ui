import * as React from 'react';
import {AppBar, Grid, Link, Switch, Typography} from "@mui/material";
import {commonColors } from "../styles/styles";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


export const Header = () => (
    <div>
        <AppBar
            position="static"
            sx={{
                background: commonColors.backgroundBlue,
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
                <Grid container item md={6} marginLeft='2rem'>
                    <Typography sx={{
                        color: commonColors.purple600,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        FL
                    </Typography>
                    <Typography sx={{
                        color: commonColors.orange,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        &nbsp;KB Hub
                    </Typography>
                    <Typography sx={{
                        color: commonColors.darkGray,
                        background: commonColors.lightGray,
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
                {/*    <Switch defaultChecked />*/}
                {/*</Grid>*/}
                <Grid item xs={0} md={1}/>
            </Grid>
        </AppBar>
    </div>
)