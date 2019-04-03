import React, { Component } from "react";

import Sidebar from "../Sidebar/Sidebar";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    content: {
        margin: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        // font: {...theme.font},
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        fontWeight: theme.font.fontWeight,

        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        [theme.breakpoints.up('md')]: {
            marginLeft: (theme.sidebar.width + theme.spacing.unit),
        },
    }
});

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        const sideDrawerState = this.state.showSideDrawer;

        this.setState({ showSideDrawer: !sideDrawerState });
    };

    render() {
        const { classes, theme } = this.props;

        console.log('theme: ', theme);

        return (
            <>
                <Sidebar
                    open={this.state.showSideDrawer}
                />

                <Paper 
                    className={classes.content}
                    square>
                    <button onClick={this.sideDrawerClosedHandler}>Click</button>
                    {this.props.children}
                </Paper>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);
