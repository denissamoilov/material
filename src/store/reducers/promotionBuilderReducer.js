import * as actionTypes from '../actions/actionTypes';

const initialState = {
    promotions: []
}

const addPromotion = (state, action) => {
    console.log('lala');
    return {
        ...state,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PROMOTION: return addPromotion(state, action);
        // case actionTypes.EDIT_PROMOTION: return setIngredients(state, action);
        // case actionTypes.REMOVE_PROMOTION: return removeIngredient(state, action);
        // case actionTypes.FETCH_PROMOTION: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;