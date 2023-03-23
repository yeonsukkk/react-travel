import { createSlice, configureStore } from "@reduxjs/toolkit";

import productData from './list'

export default configureStore({
    reducer: {
        productData: productData.reducer
    }
})