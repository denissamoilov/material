import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardActions, Fab, Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import { withContext } from '../../../hoc/withContext/withContext';

const styles = {
    card: {
        width: '100%',
        height: '100%'
    },

    cardContent: {
        display: 'flex',
        height: '100%',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
}

const promotionCard = (props) => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4" component="h2" gutterBottom>{props.title}</Typography>
                <Typography gutterBottom>{props.description}</Typography>
                <Typography gutterBottom>{props.price}</Typography>
                <CardActions>
                    <Fab 
                        color="secondary" 
                        aria-label="Add" 
                        className={classes.fab} 
                        size="small"
                        component={Link} 
                        to={"/manager/promotions/" + props.uid}>
                        <Icon>edit_icon</Icon>
                    </Fab>
                    <Fab 
                        color="secondary" 
                        aria-label="Delete" 
                        className={classes.fab} 
                        size="small"
                        onClick={() => props.removePromotion(props.uid)}>
                        <DeleteIcon />
                    </Fab>
                    {/* <Button component={Link} to={"/manager/promotions/" + props.uid} size="small">Learn More</Button> */}
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default withContext(withStyles(styles, {withTheme: true})(promotionCard));