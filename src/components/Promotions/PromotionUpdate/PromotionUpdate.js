import React, { Component } from 'react';
import axios from '../../../axios';

import { Consumer } from '../../../contexts/context';

class PromotionUpdate extends Component {
    state = {
        title: '',
        description: '',
        price: ''
    }

    postDataHandler = (context) => {
        const data = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        };

        axios.post('/promotions.json', data)
            .then(response => {
                this.props.history.push('/manager/promotions');
                // this.setState({submitted: true})
                // context = {
                //     ...context,
                //     updated: true,
                // }
                // {console.log('updater :: context :: ', context)}
            });
    }

    render() {
        return (
            <Consumer>
                {context => (
                    <>
                        {/* <h4>Promotions Update:</h4>
                        <ul>
                            {context.promotions.map(promo => {
                                return (
                                    <li key={promo.id}>{promo.name} - <strong>{promo.price}</strong></li>
                                )
                            })}
                        {console.log('updater :: context :: ', context)}
                        </ul> */}
                        <h1>Add a Post</h1>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                        <label>Description</label>
                        <textarea rows="4" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                        <label>Price</label>
                        <input type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                        <button onClick={() => this.postDataHandler(context)}>Add Post</button>
                    </>
                )}
            </Consumer>
        )
    }
}

export default PromotionUpdate;