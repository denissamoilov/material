import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'

import { Drawer, List, Link, ListItem, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    drawerPaper: {
        border: 0,
        padding: theme.spacing.unit * 3,
        width: theme.sidebar.width,
    },
    sidebarLink: {
        ...theme.sidebar.link,
    },
    list: {
        padding: 0,
    },
    listItem: {
        padding: theme.spacing.unit + 'px 0'
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

        const sidebarMenu = sidebarMenuObject.map((item) => {
            return (
                <ListItem key={item.id} className={classes.listItem}>
                    <Link 
                        className={classes.sidebarLink} 
                        component={RouterLink} 
                        to={item.slug} 
                        color='primary'
                        variant='inherit'>
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
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open={this.props.open}
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