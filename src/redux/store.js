import { configureStore } from "@reduxjs/toolkit";

import productData from './list'
import cartSlice from './cart'

export default configureStore({
    reducer: {
        productData: productData.reducer,
        cart: cartSlice.reducer
    }
})