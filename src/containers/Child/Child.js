import React, {Component} from 'react';
import queryString from 'query-string';

class Child extends Component {
    render() {
        console.log('child match: ', this.props.match.params.slug);
        
        let url = this.props.location.search;

        const params = queryString.parse(url);

        const paramsList = [];

        for( let type in params) {
            paramsList.push(<li>{type}: {params[type]}</li>);
        }

        const bodyComponent = null;

        switch(this.props.match.params.slug) {
            case 'manager':
                return (bodyComponent = <Manager />);
            default (bodyComponent = null);
        }


        return (
            <div>
                <h3>Match ID: {this.props.match.params.slug}</h3>
                <ul>
                    {paramsList}
                </ul>
            </div>
        )
    }
}

export default Child;