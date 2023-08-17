import * as React from 'react';
import {AppBar, Grid, Typography} from '@mui/material';
import {commonColors } from '../styles/styles';
import {ReactComponent as SparkleIcon} from '../images/sparkle-icon2colors.svg';

export const Header = () => (
    <div>
        <AppBar
            position='static'
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
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{paddingBottom: '.25rem'}}>
                <Grid container item md={6} marginLeft='2rem'>
                    <Grid item sx={{pr: '.35rem', pt: '.66rem'}}><SparkleIcon></SparkleIcon></Grid>
                    <Typography sx={{
                        color: commonColors.purple600,
                        fontSize: '2rem',
                        fontWeight: 'bold',
                    }}>
                        Knowledge
                    </Typography>
                    <Typography sx={{
                        color: commonColors.orange,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        &nbsp;Base
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
                {/*<Grid container item md={5} xs={5} justifyContent='flex-end' alignItems='center' marginRight='2rem'>*/}
                {/*    <LightModeOutlinedIcon/>*/}
                {/*    <Switch defaultChecked />*/}
                {/*</Grid>*/}
                <Grid item xs={0} md={1}/>
            </Grid>
        </AppBar>
    </div>
)