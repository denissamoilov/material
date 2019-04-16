import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Link } from '@material-ui/core';

import PromotionsList from './PromotionsList';
import { PromotionsProvider } from '../../../contexts/PromotionsContext';

class Promotions extends Component {
    
    render() {
        return (
            <PromotionsProvider>
                <Typography variant="h1">Promotions</Typography>
                <Link component={RouterLink} to="/manager/promotions/add" color="primary">Add Promotion</Link>
                <PromotionsList />
            </PromotionsProvider>
        )
    }
}

export default Promotions;