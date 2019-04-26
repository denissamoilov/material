import React, { Component } from 'react';
import axios from '../../../axios';

import { Provider } from '../../../contexts/context';

class Promotions extends Component {

    state = {
        promotions: [],
        updated: false
    }

    addPromotion = (newData) => {
        axios.post('/promotions.json', newData)
        .then(response => {
            this.setState({
                updated: true
            })
            this.props.history.push('/manager/promotions');
        });
    }

    removePromotion = (uid) => {
        // const newPromotionsState = [...this.state.promotions];

        console.log('Remove Promotion :: ' , uid);

        // console.log('before remove: ', newPromotionsState);

        // const removeArray = (arr, val) => arr.filter(el => console.log('el :: ', el.id));

        // const filtered = newPromotionsState.filter((value, index, arr) => index != id )

        // console.log('after remove: ', filtered);

        // axios.ref('/promotions/-Ld4OCMMS5fob_rc6WGw').delete();

        // this.addPromotion(filtered);
    }

    asyncFetch = () => {
        return axios.get('/promotions.json');
    }

    fetchPromotions = () => {
        this.asyncFetch()
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

                this.setState({
                    promotions: fetchedPromotions,
                    updated: false
                })

                // return fetchedPromotions;
            })
            .catch(error => {
                console.log('promotions error :: ', error);
            })
    }

    fetchPromotionById = uid => {

        axios.get('/promotions/' + uid)
            .then(response => {
                console.log('response :: ', response);
            })
            .catch(error => {
                console.log('fetch promotion error: ', error)
            });

    }

    render() {

        return (
            <Provider value={{
                contextState: this.state,
                fetchPromotions: this.fetchPromotions,
                fetchPromotionById: this.fetchPromotionById,
                addPromotion: this.addPromotion,
                removePromotion: this.removePromotion,
                asyncFetch: this.asyncFetch
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Promotions;