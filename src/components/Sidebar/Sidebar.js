import React, { Component } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom'

import { Drawer, List, ListItem, Link, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sidebar: {
        border: 0,
        padding: theme.spacing.unit * 3,
        transform: 'translateX(0)',
        width: theme.sidebar.width,
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    sidebarCollapsed: {
        transform: 'translateX(-' + theme.sidebar.width + 'px)',
    },
    sidebarLink: {
        ...theme.sidebar.link,
    },
    sidebarLinkActive: {
        fontWeight: 'bold'
    },
    list: {
        padding: 0,
    },
    listItem: {
        padding: theme.spacing.unit + 'px 0'
    },
    menuItem: {
        '&:hover, &:focus': {
            backgroundColor: 'transparent'
        },
    },
});

class Sidebar extends Component {

    render() {
        const { classes, theme } = this.props;

        const sidebarMenuObject = [
            {
                id: 0,
                title: 'Dashboard',
                slug: '/',
                active: false
            },
            {
                id: 1,
                title: 'Content Manager',
                slug: '/manager',
                active: false
            },
            {
                id: 2,
                title: 'Content Personalization',
                slug: '/personalization',
                active: false
            },
            {
                id: 3,
                title: 'Asset Manager',
                slug: '/assets',
                active: false
            },
            {
                id: 4,
                title: 'Site Manager',
                slug: '/site-manager',
                active: false
            },
            {
                id: 5,
                title: 'Site Settings',
                slug: '/settings',
                active: false
            },
            
        ];

        const sidebarMenu = sidebarMenuObject.map(item => {

            return (
                    <ListItem key={item.id}>
                        <Link
                            color='primary'
                            component={NavLink}
                            to={item.slug} 
                            exact
                            className={classes.sidebarLink}
                            activeClassName={classes.sidebarLinkActive}
                        >
                            {item.title}
                        </Link>
                    </ListItem>
            )
        })

        return (
            <>
                <nav>
                    <Hidden smDown>
                        <Drawer
                            classes={{
                                paper: classNames(classes.sidebar, this.props.sidebarCollapsed && classes.sidebarCollapsed)
                            }}
                            variant="permanent"
                        >
                            <List className={classes.list}>
                                {sidebarMenu}
                            </List>
                        </Drawer>
                        {/* <div className={classes.sidebar}>
                            {sidebarMenu}
                        </div> */}
                    </Hidden>
                </nav>
            </>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);