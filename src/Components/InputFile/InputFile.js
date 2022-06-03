import React from 'react'

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';


export default function InputFile(props) {
    const { handleChange, name, } = props

    return (<FormControl sx={{
        width: "300px",
        marginBottom: "20px",
        border: "none",
    }}>

        <Input
            sx={{
                borderBottom: 'none'
            }}
            id="outlined-adornment-password"
            type="file"
            name={name}
            onChange={handleChange}

            inputProps={{ multiple: true, accept: "image/*" }}

        />
    </FormControl>
    )
}
