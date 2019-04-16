import React from 'react';

import { PromotionsContext } from '../../../contexts/PromotionsContext';

const promotionsList = () => {
    return (
        <PromotionsContext.Consumer>
            {context => (
                <>
                    <h4>Promotions:</h4>
                    <ul>
                    {/* {console.log(context)} */}
                    {Object.keys(context.promotions).map(carID => (
                        <li
                            key={carID}
                            name={context.promotions[carID].name}
                            price={context.promotions[carID].price}
                            onClick={() => context.incrementPrice(carID)}
                            // incrementPrice={() => context.incrementPrice(carID)}
                            // decrementPrice={() => context.decrementPrice(carID)}
                        >{context.promotions[carID].name} : ${context.promotions[carID].price}</li>
                    ))}
                    </ul>
                </>
            )}
        </PromotionsContext.Consumer>
    )
}

export default promotionsList;