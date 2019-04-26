import React, { Component } from 'react';
import { withContext } from '../../../../hoc/withContext/withContext';

class PromotionUpdate extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        price: ''
    }

    componentDidMount() {
        const promoId = this.props.match.params.uid;

        if ( promoId !== 'add' ) {
            this.props.asyncFetch().then(response => {
                this.setState({
                    ...response.data[promoId]
                })
            })
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate(): ', this.props.contextState.promotions);
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
                <button onClick={() => this.props.addPromotion(this.state)}>Add Post</button>
            </>
        )
    }
}

export default withContext(PromotionUpdate);