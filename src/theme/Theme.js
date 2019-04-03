import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    spacing: {
        unit: 10
    },
    font: {
        fontFamily: "\"Lato\", \"Helvetica\", \"Arial\", sans-serif",
        fontSize: 14,
        fontWeight: 400,
    },
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        htmlFontSize: 10,
        fontFamily: "\"Lato\", \"Helvetica\", \"Arial\", sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    palette: {
        type: 'light',
        primary: {
            light: '#828282',
            main: '#000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff',
            main: '#f6f8f9',
            dark: '#e4e8ed',
        },
        background: {
            paper: "#fff",
            default: "#f2f2f2"
        }
    },
    shape: {
        borderRadius: 0
    },
    sidebar: {
        width: 300,
        link: {
            fontSize: '18px',
            fontFamily: "\"Lato\", \"Helvetica\", \"Arial\", sans-serif",
            '&:hover': {
                fontWeight: 'bold',
                textDecoration: 'none'
            }
        },
    },
    overrides: {
        MuiDrawer: {
            paper: {
                background: 'transparent',
            },
        },
    },
});

export default Theme;