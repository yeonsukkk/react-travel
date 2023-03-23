import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import productList from '../data.json'

// 통신
export const fetchAllProduct = createAsyncThunk('fetch-all-products', async(apiUrl) => {
    const response = await fetch(apiUrl)
    return response.json()
})

let productData = createSlice({
    name: 'product',
    initialState: {data: [], fetchStatus: ''},
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            state.fetchStatus = '성공'
        })
        .addCase(fetchAllProduct.pending, (state) => {
            state.fetchStatus = '진행중'
        })
        .addCase(fetchAllProduct.rejected, (state) => {
            state.data = productList;
            state.fetchStatus = '실패'
        })
    }
})

export default productData;