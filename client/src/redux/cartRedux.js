
/* SELECTORS */
export const getCartProducts = ({ cart }) => cart.products;
export const getCartItemsAmount = ({ cart }) => cart.products.reduce((sum, item) => sum + item.amount, 0);

/* ACTIONS */

// action names
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');

const UPDATE_AMOUNT = createActionName('UPDATE_AMOUNT');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_COMMENT = createActionName('UPDATE_COMMENT');

const CLEAR_CART = createActionName('CLEAR_CART');

const LOAD_CART = createActionName('LOAD_CART');
//

export const addToCart = payload => ({ payload, type: ADD_TO_CART });

export const updateAmount = payload => ({ payload, type: UPDATE_AMOUNT });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const updateComment = payload => ({ payload, type: UPDATE_COMMENT});

export const clearCart = payload => ({ payload, type: CLEAR_CART});

export const loadCart = payload => ({ payload, type: LOAD_CART });

/* LOCAL STORAGE */
const saveCartToLS = cart => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartFromLS = () => {
    const cart = localStorage.getItem("cart");

    if(!cart) {
        return [];
    }

    return JSON.parse(cart);
};

/* THUNKS */
export const addToCartRequest = product => {
    return (dispatch, getState) => {

        dispatch(addToCart(product));
        const cart = getState().cart.products;
        saveCartToLS(cart);
    }
};

export const removeFromCartRequest = id => {
    return (dispatch, getState) => {

        dispatch(removeFromCart(id));
        const cart = getState().cart.products;
        saveCartToLS(cart);
    }
};

export const updateAmountRequest = payload => {
    return (dispatch, getState) => {

        dispatch(updateAmount(payload));
        const cart = getState().cart.products;
        saveCartToLS(cart);
    }
};

export const updateCommentRequest = payload => {
    return (dispatch, getState) => {

        dispatch(updateComment(payload));
        const cart = getState().cart.products;
        saveCartToLS(cart);
    }
};

export const clearCartRequest = () => {
    return (dispatch, getState) => {

        dispatch(clearCart());
        const cart = getState().cart.products;
        saveCartToLS(cart);
    }
}

export const loadCartRequest = () => {
    return dispatch => {
        const cart = loadCartFromLS();

        dispatch(loadCart(cart));
    }
}

/* INITIAL STATE */
const initialState = {
    products: loadCartFromLS(),
}

/* REDUCER */

export default function cartReducer(statePart=initialState, action = {}) {
    switch(action.type) {
        case ADD_TO_CART:

            const productExist = statePart.products.find(product => product.productId === action.payload.productId);

            if(productExist) {
                return { ...statePart, products: statePart.products.map(product => product.productId === action.payload.productId ? { ...product, amount: product.amount + action.payload.amount } : product)};
            }

            return { ...statePart, products: [...statePart.products, action.payload] };
        case UPDATE_AMOUNT:
            return { ...statePart, products: statePart.products.map(product => product.productId === action.payload.productId ? { ...product, amount: action.payload.amount} : product)};
        case UPDATE_COMMENT:
            return { ...statePart, products: statePart.products.map(product => product.productId === action.payload.productId ? { ...product, comment: action.payload.comment } : product)};
        case REMOVE_FROM_CART:
            return { ...statePart, products: statePart.products.filter(product => product.productId !== action.payload)}
        case CLEAR_CART:
            return { ...statePart, products: [] };
        case LOAD_CART:
            return { ...statePart, products: action.payload };
        default:
            return statePart;
    }
}