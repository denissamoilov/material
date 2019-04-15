import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Link } from '@material-ui/core';

class Promotions extends Component {
    render() {
        return (
            <>
                <Typography variant="h1">Promotions</Typography>
                <Link component={RouterLink} to="promotions/add" color="primary">Add Promotion</Link>
            </>
        )
    }
}

export default Promotions;