import React from 'react';

import { Link as RouterLink, Switch, Route } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';

import Promotions from './Promotions/Promotions';

import PromotionUpdate from './Promotions/PromotionUpdate/PromotionUpdate';
import PromotionsList from './Promotions/PromotionsList/PromotionsList';

const contentManager = (props) => {
    // console.log("lolo: ", props);
    return (
        <>
            <Typography variant="h1">Content Manager</Typography>
            <Promotions history={props.history}>
                <Typography variant="h1">Promotions</Typography>
                <Link component={RouterLink} to="/manager/promotions/add/" color="primary">Add Promotion</Link>
                <Switch>
                    <Route path="/manager/promotions/:uid" exact component={PromotionUpdate} />
                    <Route path="/manager/promotions/add" exact component={PromotionUpdate} />
                    <Route path="/manager/promotions/" exact component={PromotionsList} />
                </Switch>
            </Promotions>
        </>
    )
}

export default contentManager;