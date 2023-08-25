import * as React from 'react';
import {Grid, Link, Typography} from '@mui/material';
import {IChat, Source} from '../App';
import {Divider} from '@mui/material';
import {SvgIcon} from '@mui/material';
import * as _ from 'lodash';
import useMediaQuery from '@mui/material/useMediaQuery';
import {commonColors} from '../styles/styles';


export const Sources: React.FC<{
    chat: IChat,
    loading: boolean
}> = ({
          chat,
          loading
      }) => {
    const filteredSources = (sources: Source[]) => {
        return _.uniqBy(sources, 'URL')
    }


    const isScreenBiggerThan600 = useMediaQuery('(min-width:600px)');


    const buttonLabelWidth = () => {
        if (isScreenBiggerThan600) {
            return '55%'
        }
        return `calc(100% - 30px)`
    }

    return (<>
        {
            chat.answer && filteredSources(chat.sources).length > 0 &&
            <>
                <Grid item container
                      direction='row'
                      sx={{
                          mb: '.5rem',
                          mt: '1rem',
                      }}>
                    <Grid item xs={12}>
                        <Divider sx={{
                            m: '.625rem 0'
                        }}/>
                        <Typography variant='body1' sx={{
                            color: commonColors.darkGray,
                            fontFamily: 'Inter',
                            fontSize: '.75rem',
                            pl: '.25rem',
                            mt: '1rem',
                            mb: '.75rem'
                        }}>SOURCES</Typography>
                    </Grid>
                    {
                        filteredSources(chat.sources)?.map((source: Source, i: number) => (
                            <Link
                                data-testid='sources'
                                target='_blank'
                                key={i}
                                href={source.URL}
                                sx={{
                                    height: '2.125rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: commonColors.purple100,
                                    border: `1px solid ${commonColors.purple600}`,
                                    borderRadius: '4px',
                                    p: '.25rem .5rem',
                                    m: '.25rem',
                                    color: commonColors.purple600,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        backgroundColor: commonColors.purple200,
                                    },
                                    '&:active': {
                                        backgroundColor: commonColors.purple300,
                                    },
                                    width: buttonLabelWidth
                                }}
                            >
                                <SvgIcon sx={{height: '1.5rem', mr: '.5rem', pb: '.2rem'}}>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <path fillRule='evenodd' clipRule='evenodd'
                                              d='M8.22601 4.48681C7.19223 3.45297 5.51608 3.45297 4.4823 4.48681C3.44861 5.52056 3.44861 7.19654 4.4823 8.2303L5.41856 9.16661C6.96914 10.7173 6.96914 13.2313 5.41856 14.782L4.48267 15.7179C3.44897 16.7517 3.44897 18.4277 4.48266 19.4614C5.51644 20.4953 7.1926 20.4953 8.22637 19.4614L9.16205 18.5257C10.7126 16.9751 13.2266 16.9751 14.7771 18.5257L15.7128 19.4614C16.7466 20.4953 18.4227 20.4953 19.4565 19.4614C20.4902 18.4277 20.4902 16.7517 19.4565 15.7179L18.5206 14.782C16.97 13.2313 16.97 10.7173 18.5206 9.16661L19.4569 8.2303C20.4905 7.19654 20.4905 5.52056 19.4569 4.48681C18.4231 3.45297 16.7469 3.45297 15.7131 4.48681L14.7773 5.42271C13.2267 6.97343 10.7125 6.97343 9.16187 5.42271L8.22601 4.48681ZM15.4289 11.1675C15.0998 9.50472 13.6333 8.2509 11.874 8.2509C9.87257 8.2509 8.25007 9.87361 8.25007 11.8751C8.25007 12.1197 8.27431 12.3587 8.32053 12.5898C8.65165 14.2499 10.1169 15.5011 11.8744 15.5011C13.8759 15.5011 15.4984 13.8784 15.4984 11.877C15.4984 11.6342 15.4745 11.3969 15.4289 11.1675Z'
                                              fill='#8C92EF'/>
                                        <rect x='9.20508' y='9.20557' width='5.40802' height='5.40834'
                                              rx='2.70401' fill='#FF714C'/>
                                        <path fillRule='evenodd' clipRule='evenodd'
                                              d='M12 0C10.5381 0 9.35295 1.18528 9.35295 2.6472C9.35295 4.10913 10.5381 5.29441 12 5.29441C13.4619 5.29441 14.647 4.10913 14.647 2.6472C14.647 1.18528 13.4619 0 12 0ZM21.3529 9.3542C19.891 9.3542 18.7059 10.5395 18.7059 12.0014C18.7059 13.4633 19.891 14.6486 21.3529 14.6486C22.8149 14.6486 24 13.4633 24 12.0014C24 10.5395 22.8149 9.3542 21.3529 9.3542ZM0 12.0014C0 10.5395 1.18512 9.3542 2.64705 9.3542C4.10897 9.3542 5.2941 10.5395 5.2941 12.0014C5.2941 13.4633 4.10897 14.6486 2.64705 14.6486C1.18512 14.6486 0 13.4633 0 12.0014ZM12 18.7056C10.5381 18.7056 9.35295 19.8909 9.35295 21.3528C9.35295 22.8147 10.5381 24 12 24C13.4619 24 14.647 22.8147 14.647 21.3528C14.647 19.8909 13.4619 18.7056 12 18.7056Z'
                                              fill='#4644B2'/>
                                    </svg>

                                </SvgIcon>
                                <Typography sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    width: `calc(100% - 30px)`
                                }}> {`${source?.title || source?.URL}`}</Typography>
                                <SvgIcon sx={{margin: '.25rem'}}>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z'
                                            fill='#4644B2'/>
                                    </svg>
                                </SvgIcon>
                            </Link>
                        ))
                    }
                    <Grid item xs={12}>
                        <Divider sx={{mt: '.625rem'}}/>
                    </Grid>
                </Grid>
            </>
        }
    </>)
}