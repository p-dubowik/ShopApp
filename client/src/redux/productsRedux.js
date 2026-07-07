import API_URL from '../config';

/* SELECTORS */
export const getAllProducts = ({ products }) => products.data;

/* ACTIONS */

// action names
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
//

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

/* THUNKS */
export const fetchProducts = () => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            const response = await fetch(`${API_URL}/products`);

            if(!response.ok) {
                throw new Error('Failed to fetch');
            }
            const products = await response.json();

            dispatch(endRequest(products));
        } catch(error) {
            dispatch(errorRequest(error.message));
        }
    };
};

/* INITIAL STATE */
const initialState = {
    data: [],
    loading: false,
    error: null
}

/* REDUCER */

export default function productsReducer(statePart=initialState, action = {}) {
    switch(action.type) {
        case START_REQUEST:
            return {...statePart, loading: true};
        case END_REQUEST:
            return {...statePart, loading: false, data: action.payload};
        case ERROR_REQUEST:
            return {...statePart, loading: false, error: action.payload}
        default:
            return statePart;
    }
}