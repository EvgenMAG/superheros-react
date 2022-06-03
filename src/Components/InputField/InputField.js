import React from 'react'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function InputField(props) {
    const { label, value, handleChange, name, type = "text" } = props

    return (<FormControl sx={{
        width: "300px",
        marginBottom: "10px"
    }}>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
            id="outlined-adornment-password"
            type={type}
            name={name}
            inputProps={{ min: 0 }}
            value={value}
            onChange={handleChange}
            endAdornment={
                <InputAdornment position="end" />

            }
            label={label}
        />
    </FormControl>
    )
}
