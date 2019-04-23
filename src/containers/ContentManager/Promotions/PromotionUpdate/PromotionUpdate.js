import React, { Component } from 'react';
import axios from '../../../../axios';
import { withContext } from '../../../../hoc/withContext/withContext';

class PromotionUpdate extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        price: ''
    }

    addPromotion = (data) => {
        axios.post('/promotions.json', data)
            .then(response => {
                this.props.setState({updated: true})
                this.props.history.push('/manager/promotions');
            });
    }

    componentDidMount() {
        const promoId = this.props.match.params.id;

        console.log('current promo data: ', this.props.state.promotions);

        // if(typeof promoId !== "undefined") {
        //     this.setState({
        //         ...this.state,
        //         ...this.props.state.promotions[promoId]
        //     })
        // }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate(): ', this.props.state.promotions);
    }
    
    render() {
        return (
            <>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                <button onClick={() => this.addPromotion(this.state)}>Add Post</button>
            </>
        )
    }
}

export default withContext(PromotionUpdate);