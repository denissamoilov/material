import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';

const promotionCard = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>{props.title}</Typography>
                <Typography gutterBottom>{props.description}</Typography>
                <Typography gutterBottom>{props.price}</Typography>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default promotionCard;