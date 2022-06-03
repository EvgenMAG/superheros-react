

import * as React from 'react';
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';

export default function TextArea(props) {

    const { label, value, handleChange, name } = props

    return (

        <div>
            <TextField
                sx={{
                    width: "300px",
                    marginBottom: "10px"
                }}
                id="outlined-multiline-flexible"
                label={label}
                name={name}
                multiline
                maxRows={4}
                value={value}
                onChange={handleChange}
            />
        </div>

    );
}
