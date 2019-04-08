import React, { Component } from "react";
import classNames from 'classnames';

import Sidebar from "../Sidebar/Sidebar";

import { Paper, IconButton, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    content: {
        margin: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        // font: {...theme.font},
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        fontWeight: theme.font.fontWeight,
        position: 'relative',
        transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.sharp,
            // duration: theme.transitions.duration.leavingScreen,
        }),

        [theme.breakpoints.up('md')]: {
            marginLeft: (theme.sidebar.width + theme.spacing.unit),
        },
    },
    contentExpanded: {
        marginLeft: theme.spacing.unit * 3
    },
    expandButton: {
        background: 'transparent',
        boxShadow: '0 0 #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        position: 'absolute',
        left: 0,
        top: 0,
        '&:hover': {
            background: 'transparent',
            color: theme.palette.primary.light
        }
    }
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
        const { classes } = this.props;

        const upLeftSvgPath = <path d="m16.7 15.1-5.9-5.9h3.6c.3 0 .6-.1.8-.3s.3-.5.3-.8c0-.6-.5-1.1-1.1-1.1h-7.4v7.3c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-3.6l5.9 5.9c.4.4 1.1.4 1.6 0 .4-.4.4-1.1 0-1.5z"/>;
        const downRightSvgPath = <path d="m7.3 8.9 5.9 5.9h-3.5c-.3 0-.6.1-.8.3s-.3.5-.3.8c0 .6.5 1.1 1.1 1.1h7.3v-7.3c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v3.6l-5.9-6c-.4-.4-1.1-.4-1.6 0-.4.5-.4 1.2 0 1.6z"/>;

        const expandIcon = this.state.sidebarCollapsed ? downRightSvgPath : upLeftSvgPath;

        console.log('props: ', this.props);

        return (
            <>
                <Sidebar
                    sidebarCollapsed={this.state.sidebarCollapsed}
                />

                <Paper 
                    className={classNames(classes.content, this.state.sidebarCollapsed && classes.contentExpanded)}
                    elevation={5}
                    square>
                    <IconButton 
                        className={classes.expandButton}
                        aria-label="Open drawer"
                        disableRipple
                        color="primary"
                        onClick={this.sideDrawerClosedHandler}
                    >
                        <SvgIcon>
                            {expandIcon}
                        </SvgIcon>
                    </IconButton>
                    {this.props.children}
                </Paper>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);
