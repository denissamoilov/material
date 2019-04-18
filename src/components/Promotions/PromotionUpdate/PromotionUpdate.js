import React from 'react';

import { PromotionsConsumer } from '../../../contexts/PromotionsContext';

const promotionUpdate = () => {
    return (
        <PromotionsConsumer>
            {context => (
                <>
                    <h4>Promotions Update:</h4>
                    <ul>
                        {context.promotions.map(promo => {
                            return (
                                <li key={promo.id}>{promo.name} - <strong>{promo.price}</strong></li>
                            )
                        })}
                    {console.log('updater :: context :: ', context)}
                    </ul>
                </>
            )}
        </PromotionsConsumer>
    )
}

export default promotionUpdate;