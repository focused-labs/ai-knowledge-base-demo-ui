import React, {useState} from 'react';
import {ReactComponent as AIRole} from '../images/AIRole.svg';
import {ReactComponent as EnterButtonHover} from '../images/EnterHover.svg';
import {ReactComponent as EnterButtonDefault} from '../images/EnterDefault.svg';
import {ReactComponent as EnterButtonDisabled} from '../images/EnterDisabled.svg';
import {ReactComponent as EnterButtonPressed} from '../images/EnterPressed.svg';
import {
    FormControl,
    Select,
    MenuItem,
    Typography,
    Button,
    TextField,
    Box,
    ListSubheader
} from '@mui/material';
import {commonColors} from '../styles/styles';

enum EnterButtonState {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
    PRESSED = 'PRESSED',
    HOVERED = 'HOVERED'
}

export const QueryForm: React.FC<{
    persona: string,
    onPersonaChange: (value: string) => void,
    inputQuery: string,
    onInputQueryChange: (value: string) => void,
    onSubmit: () => void
    loading: boolean
}> = ({
          persona,
          onPersonaChange,
          inputQuery,
          onInputQueryChange,
          onSubmit,
          loading
      }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [enterButtonStatus, setEnterButtonStatus] = useState<EnterButtonState>(EnterButtonState.DISABLED)
    const [previousEnterButtonStatus, setPreviousEnterButtonStatus] = useState<EnterButtonState>(EnterButtonState.DISABLED)

    const roles = [
        {label: 'Any Role', value: 'none'},
        {label: 'Potential Employee', value: 'candidate'},
        {label: 'Potential Customer', value: 'customer'},
    ]

    const onFormSubmit = () => {
        if (inputQuery && !loading) {
            onSubmit()
            setEnterButtonStatus(EnterButtonState.DISABLED)
        }
    }

    const retrieveEnterButton = () => {
        switch (enterButtonStatus) {
            case EnterButtonState.DISABLED:
                return <EnterButtonDisabled/>
            case EnterButtonState.PRESSED:
                return <EnterButtonPressed/>
            case EnterButtonState.HOVERED:
                return <EnterButtonHover/>
            case EnterButtonState.ACTIVE:
            default:
                return <EnterButtonDefault/>
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 1,
                border: `2px solid ${isFocused ? commonColors.purple600 : commonColors.lightGray}`,
                borderRadius: 1,
                transition: 'border 0.2s ease-in-out',
                '&:hover': {
                    border: `2px solid ${isFocused ? commonColors.purple600 : commonColors.purple400}`,
                }
            }}
        >
            <FormControl variant='outlined' sx={{marginRight: 1}}>
                <Select
                    sx={{
                        background: commonColors.purple100,
                        color: commonColors.purple400,
                        width: '15rem',
                        '& .MuiInputBase-input': {
                            display: 'flex',
                        },
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline, &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, & fieldset':
                            {
                                border: 0,
                            },
                        '& .MuiSvgIcon-root': {
                            color: commonColors.purple600
                        },
                        '&:hover': {
                            backgroundColor: commonColors.purple200,
                        },
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        transformOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center'
                        },
                        autoFocus: false,
                        sx: {
                            top: '-.75rem',
                            '&& .Mui-selected': {
                                '&:hover': {
                                    backgroundColor: commonColors.purple200,
                                },
                                backgroundColor: commonColors.purple100,
                                '& .MuiTypography-root': {
                                    fontWeight: 700,
                                }
                            },
                            '& .MuiMenuItem-root:hover': {
                                backgroundColor: commonColors.purple200,
                            },
                            '& .MuiList-root': {
                                backgroundColor: commonColors.purple100,
                            },
                            '& fieldset': {border: 'none'},
                        }
                    }}
                    value={persona}
                    name='role'
                    onChange={e => onPersonaChange(e.target.value)}>
                        <ListSubheader sx={{
                            backgroundColor: commonColors.purple100,
                            padding: '.5rem 1rem'
                        }}>
                            <Typography sx={{
                                width: '12rem',
                                fontWeight: 400,
                                fontSize: '.75rem'
                            }}>Tell us who you are for a better response:</Typography>
                        </ListSubheader>
                        {
                            roles.map((role, i) => (
                                <MenuItem key={i} value={role.value} sx={{backgroundColor: commonColors.purple100}}>
                                    {(persona === role.value)&&<AIRole style={{
                                        color: commonColors.purple600,
                                        marginRight: '1rem',
                                    }}/>}
                                    <Typography sx={{
                                        color: commonColors.purple600,
                                    }}>
                                        {role.label}
                                    </Typography>
                                </MenuItem>
                            ))
                        }
                </Select>
            </FormControl>
            <TextField
                value={inputQuery}
                placeholder='Ask Something'
                sx={{
                    flex: 1,
                    marginRight: 1,
                    '& fieldset': {border: 'none'},
                }}
                onClick={() => setIsFocused(true)}
                onChange={(e) => {
                    onInputQueryChange(e.target.value)
                    if (e.target.value) {
                        setEnterButtonStatus(EnterButtonState.ACTIVE);
                    } else {
                        setEnterButtonStatus(EnterButtonState.DISABLED);
                    }
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter')
                        onFormSubmit()
                }}
                onBlur={() => setIsFocused(false)}

            />
            <Button
                data-testid="submit-button"
                type='submit'
                disableRipple
                sx={{
                    height: '2.65rem',
                    minWidth: '2.5rem',
                    justifyContent: 'flex-end',
                    '&:hover': {
                        background: 'transparent',
                    }
                }}
                onClick={e => {
                    e.preventDefault();
                    onFormSubmit()
                }}
                onMouseEnter={() => {
                    if (enterButtonStatus !== EnterButtonState.DISABLED) {
                        setPreviousEnterButtonStatus(enterButtonStatus)
                        setEnterButtonStatus(EnterButtonState.HOVERED)
                    }
                }}
                onMouseLeave={() => {
                    if (inputQuery) {
                        setEnterButtonStatus(EnterButtonState.ACTIVE)
                    } else {
                        setEnterButtonStatus(EnterButtonState.DISABLED)
                    }
                }}
                onMouseDown={() => {
                    setPreviousEnterButtonStatus(enterButtonStatus)
                    setEnterButtonStatus(EnterButtonState.PRESSED)
                    onFormSubmit()
                }}
                onMouseUp={() => {
                    setEnterButtonStatus(previousEnterButtonStatus)
                }}
            >
                {retrieveEnterButton()}
            </Button>
        </Box>
    );
};