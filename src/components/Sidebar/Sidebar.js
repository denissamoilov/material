import React from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom'

import { Drawer, List, ListItem, Link, Hidden, Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sidebar: {
        border: 0,
        padding: theme.spacing.unit * 3,
        transform: 'translateX(0)',
        width: theme.sidebar.width,
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            // duration: theme.transitions.duration.leavingScreen,
        }),

        [theme.breakpoints.down('sm')]: {
            transform: `translateX(-${theme.sidebar.width}px)`,
        },
    },
    sidebarCollapsed: {
        transform: `translateX(-${theme.sidebar.width}px)`,
    },
    sidebarLink: {
        ...theme.sidebar.link,
    },
    sidebarSubLink: {
        ...theme.sidebar.link,
        color: theme.palette.primary.light,
        fontSize: 16,
        padding: '0 ' + theme.spacing.unit * 2 + 'px',
        fontWeight: 400,
    },
    sidebarLinkActive: {
        color: theme.palette.primary.main,
        fontWeight: '500'
    },
    menuListItem: {
        flexFlow: 'column nowrap',
        alignItems: 'flex-start'
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

const sideBar = (props) => {

    const { classes } = props;

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
            active: false,
            children: [{
                id: 1,
                title: 'Promotions',
                slug: '/manager/promotions',
                active: false,
            }]
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

    const sidebarMenu = (array) => array.map(item => {

        return (
                <ListItem key={item.id} 
                    className={classes.menuListItem}>
                    <Link
                        color='primary'
                        component={NavLink}
                        to={item.slug} 
                        className={classes.sidebarLink}
                        activeClassName={classes.sidebarLinkActive}
                    >
                        {item.title}
                    </Link>
                    {(item.children !== undefined) ? (
                        <Collapse in={true} timeout="auto" unmountOnExit>
                            <List className={classes.list}>
                                {sidebarMenu(item.children)}
                            </List>
                        </Collapse>
                    ): null}
                </ListItem>
        )
    })

    return (
        <>
            <Hidden smDown>
                <Drawer
                    classes={{
                        paper: classNames(classes.sidebar, props.sidebarCollapsed && classes.sidebarCollapsed)
                    }}
                    variant="permanent"
                >
                    <nav>
                        <List className={classes.list}>
                            {sidebarMenu(sidebarMenuObject)}
                        </List>
                    </nav>
                </Drawer>
                {/* <div className={classes.sidebar}>
                    {sidebarMenu}
                </div> */}
            </Hidden>
        </>
    )
}

export default withStyles(styles, { withTheme: true })(sideBar);