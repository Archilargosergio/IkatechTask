import { configureStore } from '@reduxjs/toolkit';
import loadReducer from '../reducers/loadReducers';
import cartReducer from '../reducers/cartReducer';

export default configureStore ({
    reducer: {
        image: loadReducer,
        cart: cartReducer,
    }
})