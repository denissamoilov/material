import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Promotions from './Promotions/Promotions';
import promotionBuilder from './Promotions/PromotionBuilder/PromotionBuilder';

const contentManager = () => {

    return (
        <>
            <Typography variant="h1">Content Manager</Typography>
            <Switch>
                <Route path="/manager/promotions/:action" component={promotionBuilder} />
                <Route path="/manager/promotions/" component={Promotions} />
            </Switch>
        </>
    )
}

export default contentManager;