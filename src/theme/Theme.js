import { createMuiTheme } from '@material-ui/core/styles';

const defaultFontFamily = "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif";

const Theme = createMuiTheme({
    // shadows: ['none'],
    spacing: {
        unit: 10
    },
    font: {
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fontWeight: 400,
    },
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        htmlFontSize: 10,
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400
    },
    palette: {
        type: 'light',
        primary: {
            light: '#8f8f8f',
            main: '#000',
            contrastText: '#688ea3',
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
            fontWeight: 300,
            fontFamily: defaultFontFamily,
            '&:hover': {
                fontWeight: 400,
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
        MuiPaper: {
            elevation5: {
                boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.10), 0px 5px 8px 0px rgba(0,0,0,0.06), 0px 1px 14px 0px rgba(0,0,0,0.04)',
            }
        },
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
});

export default Theme;