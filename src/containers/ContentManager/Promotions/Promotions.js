import React, { Component } from 'react';
import { PromotionsProvider } from '../../../contexts/PromotionsContext';

class Promotions extends Component {

    state = {
        promotions: [{
            id: 1,
            name: 'Promo 1',
            price: 150
        },
        {
            id: 2,
            name: 'Promo 2',
            price: 250
        },
        {
            id: 3,
            name: 'Promo 3',
            price: 350
        }]
    }

    fetchPromotions = () => {
        return console.log('Fetching Promotions!')
        
    }

    componentDidMount() {
        console.log('Promotions did mount!');
        this.fetchPromotions();
    }

    render() {
        return (
            <PromotionsProvider value={this.state}>
                {this.props.children}
            </PromotionsProvider>
        )
    }
}

export default Promotions;