import React from 'react';
import {ReactComponent as SparkleIcon} from '../images/sparkleIcon.svg';
import {ReactComponent as EnterButton} from '../images/enterButton.svg';
import {
    Grid,
    FormControl,
    Select,
    MenuItem,
    Typography,
    Button,
    TextField,
} from "@mui/material";

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

    const roles = [
        {label: "No Preference", value: "none"},
        {label: "Potential Employee", value: "candidate"},
        {label: "Potential Client", value: "client"},
    ]

    return (
        <Grid container
              sx={{width: 1}}
              direction="column"
              justifyContent="between">
            <Grid>
                <FormControl
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        padding: 1,
                        border: '2px solid #E5E7EB',
                        borderRadius: '0.375rem',
                        height: "5rem"
                    }}>
                    <Select
                        sx={{
                            background: "#EDF3FF",
                            color: "#8C92EF",
                            outline: 0,
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
                                        color: "#464482",
                                        margin: 0,
                                    }}/>
                                    <Typography sx={{ml: 2}}>
                                        {role.label}
                                    </Typography>

                                </MenuItem>
                            ))
                        }
                    </Select>

                    <TextField
                        variant="outlined"
                        placeholder="Ask Something"
                        fullWidth={true}
                        value={inputQuery}
                        onChange={e => onInputQueryChange(e.target.value)}
                        sx={{
                            marginLeft: 2,
                            height: 1,
                            "& fieldset": {border: 'none'},
                        }}
                        onKeyDown={e => {
                            if (e.key === 'Enter')
                                onSubmit()
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
                </FormControl>
            </Grid>
        </Grid>
    )
}
