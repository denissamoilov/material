import React from 'react';

import { PromotionsConsumer } from '../../../contexts/PromotionsContext';

const promotionList = () => {
    return (
        <PromotionsConsumer>
            {context => (
                <>
                    <h4>Promotions List:</h4>
                    <ul>
                        {context.promotions.map(promo => {
                            return (
                                <li key={promo.id}>{promo.name} - <strong>{promo.price}</strong></li>
                            )
                        })}
                    {console.log('list :: context :: ', context)}
                    </ul>
                </>
            )}
        </PromotionsConsumer>
    )
}

export default promotionList;