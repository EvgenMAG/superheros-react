import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },
    palette: {
        primary: {
            main: '#F50057',
        },
        secondary: {
            main: '#FFFFFF',
        },
        info: {
            main: '#BDBDBD',
        },
    },
});

export default defaultTheme;