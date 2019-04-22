import React from 'react';
import { List, ListItem } from '@material-ui/core';

import { Consumer } from '../../../../contexts/context';

import PromotionCard from '../../../../components/Promotions/PromotionCard/PromotionCard';

const promotionList = () => {
    return (
        <Consumer>
            {({state, updatePromotions}) => (
                <>
                    <h4>Promotions List:</h4>
                    <List>
                        {state.promotions.map(promo => {
                            return (
                                <ListItem key={promo.id}>
                                    <PromotionCard title={promo.title} description={promo.description} price={promo.price} />
                                </ListItem>
                            )
                        })}
                    </List>
                </>
            )}
        </Consumer>
    )
}

export default promotionList;