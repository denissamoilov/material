import React, { Component } from 'react';
import axios from '../../../axios';

import { Provider } from '../../../contexts/context';

class Promotions extends Component {

    state = {
        // promotions: [],
        updated: false
    }

    // addPromotion = (newData) => {
    //     axios.post('/promotions.json', newData)
    //     .then(response => {
    //         this.setState({updated: true})
    //         this.props.history.push('/manager/promotions');
    //     });
    // }

    fetchPromotions = async uid => {
        const url = (uid) ? '/promotions/' + uid : '/promotions.json'
        axios.get(url)
            .then(response => {
                const fetchedPromotions = [];

                let counter = 0;

                for(let key in response.data) {

                    fetchedPromotions.push({
                        ...response.data[key],
                        uid: key,
                        id: counter
                    });
                    counter++;
                }

                // console.log('fetchedPromotions: ', fetchedPromotions[0]);

                // this.setState({
                //     promotions: fetchedPromotions,
                //     updated: false
                // })

                return fetchedPromotions;
            })
            .catch(error => {
                console.log('promotions error :: ', error);
            })
    }

    componentDidMount() {
        this.fetchPromotions();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('Promotions did update :: prevProps :: ', prevProps);
        // console.log('Promotions did update :: prevState :: ', prevState);
        // console.log('Promotions did update :: this.state :: ', this.state);
        if(prevState.updated !== this.state.updated) {
            this.fetchPromotions();
        }
    }

    render() {

        return (
            <Provider value={{
                state: this.state,
                fetchPromotions: this.fetchPromotions
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Promotions;