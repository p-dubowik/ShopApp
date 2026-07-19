import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./productsRedux";
import cartReducer from "./cartRedux";
import ordersReducer from "./ordersRedux";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;