import React from 'react';

import { Typography } from '@material-ui/core';

const promotionBuilder = ({ match }) => {
    console.log('lala: ', match.params.action);
    const actionString = match.params.action;
    return (
        <Typography variant="h1">{actionString} Promotion</Typography>
    )
}

export default promotionBuilder;