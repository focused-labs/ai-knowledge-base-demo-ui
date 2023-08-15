import React, {useState} from 'react';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
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
    Box
} from "@mui/material";
import {commonColors} from "../styles/styles";

enum EnterButtonState {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    PRESSED = "PRESSED",
    HOVERED = "HOVERED"
}

export const QueryForm: React.FC<{
    persona: string,
    onPersonaChange: (value: string) => void,
    inputQuery: string,
    onInputQueryChange: (value: string) => void,
    onSubmit: () => void
}> = ({
          persona,
          onPersonaChange,
          inputQuery,
          onInputQueryChange,
          onSubmit
      }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [enterButtonStatus, setEnterButtonStatus] = useState<EnterButtonState>(EnterButtonState.DISABLED)
    const [previousEnterButtonStatus, setPreviousEnterButtonStatus] = useState<EnterButtonState>(EnterButtonState.DISABLED)

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Potential Employee", value: "candidate"},
        {label: "Potential Client", value: "client"},
    ]

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
            <FormControl variant="outlined" sx={{marginRight: 1}}>
                <Select
                    sx={{
                        background: commonColors.purple100,
                        color: commonColors.purple400,
                        width: "20rem",
                        '& .MuiInputBase-input': {
                            display: 'flex',
                        }
                    }}
                    value={persona}
                    name="role"
                    onChange={e => onPersonaChange(e.target.value)}>
                    {
                        roles.map((role, i) => (
                            <MenuItem key={i} value={role.value}>
                                <SparkleIcon style={{
                                    color: commonColors.purple600,
                                    margin: 0,
                                }}/>
                                <Typography sx={{ml: 2, color: commonColors.purple600}}>
                                    {role.label}
                                </Typography>
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField
                placeholder="Ask Something"
                sx={{
                    flex: 1,
                    marginRight: 1,
                    "& fieldset": {border: 'none'},
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
                        onSubmit()
                }}
                onBlur={() => setIsFocused(false)}

            />
            <Button
                type="submit"
                disableRipple
                sx={{
                    '&:hover': {
                        background: 'transparent',
                    }
                }}
                onClick={e => {
                    e.preventDefault();
                    onSubmit()
                }}
                onMouseEnter={() => {
                    if (enterButtonStatus !== EnterButtonState.DISABLED) {
                        setPreviousEnterButtonStatus(enterButtonStatus)
                        setEnterButtonStatus(EnterButtonState.HOVERED)
                    }
                }}
                onMouseLeave={() => {
                    setEnterButtonStatus(previousEnterButtonStatus)
                }}
                onMouseDown={() => {
                    setPreviousEnterButtonStatus(enterButtonStatus)
                    setEnterButtonStatus(EnterButtonState.PRESSED)
                    onSubmit()
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