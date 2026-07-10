import API_URL from "../config";

/* SELECTORS */
export const getOrderLoading = ({ orders }) => orders.loading;
export const getOrderError = ({ orders }) => orders.error;

export const getOrder = ({ orders }) => orders.data;

/* ACTIONS */

// action names
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

//

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });


/* THUNKS */
export const submitOrder = orderData => {
    return async dispatch => {

        dispatch(startRequest());

        try {

            const settings = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData),
            };

            const response = await fetch(`${API_URL}/orders`, settings);

            if(!response.ok) {
                throw new Error("Failed to create order");
            }

            const order = await response.json();

            dispatch(endRequest(order));
        } catch (error) {
            dispatch(errorRequest(error.message));
        }
    };
};

/* INITIAL STATE */
const initialState = {
    data: null,
    loading: false,
    error: null
}

/* REDUCER */

export default function ordersReducer(statePart=initialState, action = {}) {
    switch(action.type) {
        case START_REQUEST:
            return {...statePart, loading: true, error: null};
        case END_REQUEST:
            return {...statePart, loading: false, data: action.payload, error: null};
        case ERROR_REQUEST:
            return {...statePart, loading: false, error: action.payload}
        default:
            return statePart;
    }
}

