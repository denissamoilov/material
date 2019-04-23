import React from 'react';

import { Consumer } from '../../contexts/context';

export const withContext = Component => {
    return props => {
        return (
            <Consumer>
                {(context) =>
                    <Component {...props} {...context} />
                }
            </Consumer>
        )
    }
}