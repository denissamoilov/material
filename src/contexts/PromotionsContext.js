import React, { Component } from 'react'


export const PromotionsContext = React.createContext();

export class PromotionsProvider extends Component {
    state = {
        promotions: [
            { name: 'Commodo Parturient', price: 100 },
            { name: 'Fermentum Purus', price: 150 },
            { name: 'Lorem Tristique Nibh', price: 200 }
        ]
    };

    render() {
        return (
            <PromotionsContext.Provider 
                value={{
                    promotions: this.state.promotions,
                    incrementPrice: selectedID => {
                        const promotions = Object.assign({}, this.state.promotions);
                        promotions[selectedID].price = promotions[selectedID].price + 1;
                        this.setState({
                            promotions
                        });
                    },
                    decrementPrice: selectedID => {
                        const promotions = Object.assign({}, this.state.promotions);
                        promotions[selectedID].price = promotions[selectedID].price - 1;
                        this.setState({
                            promotions
                        });
                    }
                }}>
                {this.props.children}
            </PromotionsContext.Provider>
        )
    }
}