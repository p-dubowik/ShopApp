
/* SELECTORS */
export const getCartProducts = ({ cart }) => cart.products;

/* ACTIONS */

// action names
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');

const UPDATE_AMOUNT = createActionName('UPDATE_AMOUNT');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_COMMENT = createActionName('UPDATE_COMMENT');
//

export const addToCart = payload => ({ payload, type: ADD_TO_CART });

export const updateAmount = payload => ({ payload, type: UPDATE_AMOUNT });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const updateComment = payload => ({ payload, type: UPDATE_COMMENT});

/* INITIAL STATE */
const initialState = {
    products: [],
}

/* REDUCER */

export default function cartReducer(statePart=initialState, action = {}) {
    switch(action.type) {
        case ADD_TO_CART:
            return { ...statePart, products: [...statePart.products, action.payload] };
        case UPDATE_AMOUNT:
            return { ...statePart, products: statePart.products.map(product => product.productId === action.payload.productId ? { ...product, amount: action.payload.amount} : product)};
        case UPDATE_COMMENT:
            return { ...statePart, products: statePart.products.map(product => product.productId === action.payload.productId ? { ...product, comment: action.payload.comment } : product)};
        case REMOVE_FROM_CART:
            return { ...statePart, products: statePart.products.filter(product => product.productId !== action.payload)}
        default:
            return statePart;
    }
}