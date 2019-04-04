import React, { Component } from "react";
import classNames from 'classnames';

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
    },
    contentExpanded: {
        marginLeft: theme.spacing.unit * 3
    },
});

class Layout extends Component {
    state = {
        sidebarCollapsed: false
    };

    sideDrawerClosedHandler = () => {
        const showSidebar = this.state.sidebarCollapsed;

        this.setState({ sidebarCollapsed: !showSidebar });
    };

    render() {
        const { classes, theme } = this.props;

        console.log('theme: ', theme);

        return (
            <>
                <Sidebar
                    sidebarCollapsed={this.state.sidebarCollapsed}
                />

                <Paper 
                    className={classNames(classes.content, this.state.sidebarCollapsed && classes.contentExpanded)}
                    sidebarCollapsed={this.state.showSideDrawer}
                    square>
                    <button onClick={this.sideDrawerClosedHandler}>Click</button>
                    {this.props.children}
                </Paper>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);
