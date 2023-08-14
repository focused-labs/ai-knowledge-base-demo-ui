import React, {useState} from 'react';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
import {ReactComponent as EnterButton} from '../images/enterButton.svg';
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

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Potential Employee", value: "candidate"},
        {label: "Potential Client", value: "client"},
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 1,
                border: `2px solid ${isFocused ? commonColors.purple600 : commonColors.lightGray}`,
                borderRadius: 1,
                transition: 'border 0.3s ease-in-out',
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
                // variant="outlined"
                placeholder="Ask Something"
                sx={{
                    flex: 1,
                    marginRight: 1,
                    "& fieldset": {border: 'none'},
                }}
                onClick={() => {
                    console.log("pressed")
                    setIsFocused(true)
                }}
                onBlur={() => {
                    console.log("unpressed")
                    setIsFocused(false)
                }}
            />
            <Button
                type="submit"
                className="border-1 rounded-full"
                onClick={e => {
                    e.preventDefault();
                    onSubmit()
                }}
            >
                <EnterButton className="mx-2"/>
            </Button>
        </Box>
    );
};