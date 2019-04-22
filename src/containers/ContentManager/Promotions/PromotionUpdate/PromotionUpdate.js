import React, { Component } from 'react';
// import axios from '../../../axios';

import { Consumer } from '../../../../contexts/context';

class PromotionUpdate extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        price: ''
    }

    render() {
        console.log('promotion props: ', this.props.match.params.id);
        return (
            <Consumer>
                {({state, updatePromotions}) => (
                    <>
                        {/* <h4>Promotions Update:</h4>
                        <ul>
                            {context.promotions.map(promo => {
                                return (
                                    <li key={promo.id}>{promo.name} - <strong>{promo.price}</strong></li>
                                )
                            })}
                        </ul> */}
                        <h1>Add a Post</h1>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                        <label>Description</label>
                        <textarea rows="4" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                        <label>Price</label>
                        <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                        <button onClick={() => updatePromotions(this.state)}>Add Post</button>
                    </>
                )}
            </Consumer>
        )
    }
}

export default PromotionUpdate;