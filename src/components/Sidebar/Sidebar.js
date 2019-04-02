import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const sidebarWidth = 300;

const styles = theme => ({
    drawerPaper: {
        padding: theme.spacing.unit * 3,
        width: sidebarWidth,
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
                <Link key={item.id} component={RouterLink} to={item.slug}>
                    <Typography variant="button" color='primary'>{item.title}</Typography>
                </Link>
            )
        })

        console.log('props: ', this.props)

        return (
            <>
                <CssBaseline />
                <nav className={classes.sidebar}>
                    <Hidden smDown>
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {sidebarMenu}
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