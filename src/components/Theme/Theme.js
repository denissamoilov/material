import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    spacing: {
        unit: 10
    },
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        htmlFontSize: 10,
        sideBarLink: {
            color: '#000',
            fontSize: '24px'
        }
    },
    palette: {
        primary: {
            main: '#000',
            contrastText: 'blue',
        }
    },
});

export default Theme;