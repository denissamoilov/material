import React, { Component } from 'react';
import { withContext } from '../../../../hoc/withContext/withContext';

import { List, ListItem } from '@material-ui/core';
import PromotionCard from '../../../../components/Promotions/PromotionCard/PromotionCard';

class PromotionList extends Component {

    state = {
        promotions: [],
        loaded: false
    }
    render() {
    
        const promotions = this.props.fetchPromotions();
    
        console.log('promotions: ', this.props.fetchPromotions());

        return (
            <>
                <h4>Promotions List:</h4>
                <List>
                    {/* {promotions.map(promo => {
                        return (
                            <ListItem key={promo.id}>
                                <PromotionCard id={promo.id} title={promo.title} description={promo.description} price={promo.price} />
                            </ListItem>
                        )
                    })} */}
                </List>
            </>
        )
    }
}

export default withContext(PromotionList);