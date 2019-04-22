import React, { Component } from 'react';
import axios from '../../../axios';

import { Provider } from '../../../contexts/context';

class Promotions extends Component {

    state = {
        promotions: [],
        updated: false
    }

    updatePromotions = (newData) => {
        axios.post('/promotions.json', newData)
        .then(response => {
            // this.props.history.replace('/manager/promotions');
            this.setState({updated: true})
            this.props.history.push('/manager/promotions');
        });
    }

    fetchPromotions = () => {
        console.log('history :: ', this);
        axios.get('/promotions.json')
            .then(response => {
                const fetchedPromotions = [];

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
                updatePromotions: this.updatePromotions
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Promotions;