import React, { Component } from 'react';
import axios from '../../../axios';

import { Provider } from '../../../contexts/context';

class Promotions extends Component {

    state = {
        // promotions: [{
        //     id: 1,
        //     name: 'Promo 1',
        //     price: 150
        // },
        // {
        //     id: 2,
        //     name: 'Promo 2',
        //     price: 250
        // },
        // {
        //     id: 3,
        //     name: 'Promo 3',
        //     price: 350
        // }],
        promotions: [],
        updated: false
    }

    fetchPromotions = () => {
        axios.get('/promotions.json')
            .then(response => {
                const fetchedPromotions = [];

                console.log('lala');

                for(let key in response.data) {
                    fetchedPromotions.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({
                    promotions: fetchedPromotions,
                    updated: false
                })
            })
            .catch(error => {
                console.log('promotions error :: ', error);
            })
        
    }

    componentDidMount() {
        console.log('Promotions did mount!', this.state);
        this.fetchPromotions();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // console.log('Promotions did update :: prevProps :: ', prevProps);
    //     // console.log('Promotions did update :: prevState :: ', prevState);
    //     console.log('Promotions did update :: this.state :: ', this.state);
    //     // if(prevState.updated !== this.state.updated) {
    //         this.fetchPromotions();
    //     // }
    // }

    render() {
        console.log('this.state.updated :: ', this.state.updated);
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Promotions;