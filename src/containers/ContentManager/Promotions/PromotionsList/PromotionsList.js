import React, { Component } from 'react';
import { withContext } from '../../../../hoc/withContext/withContext';

import { List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PromotionCard from '../../../../components/Promotions/PromotionCard/PromotionCard';

const styles = theme => ({
    list: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch'
    },
    listItem: {
        width: '30%',
    }
});

class PromotionList extends Component {

    componentDidMount() {
        this.props.fetchPromotions();
    }
    
    render() {

        const { classes } = this.props;

        return (
            <>
                <h4>Promotions List:</h4>
                <List className={classes.list}>
                    {this.props.contextState.promotions.map(promo => {
                        return (
                            <ListItem key={promo.id} className={classes.listItem}>
                                <PromotionCard className={classes.card} uid={promo.uid} id={promo.id} title={promo.title} description={promo.description} price={promo.price} />
                            </ListItem>
                        )
                    })}
                </List>
            </>
        )
    }
}

export default withContext(withStyles(styles, { withTheme: true })(PromotionList));