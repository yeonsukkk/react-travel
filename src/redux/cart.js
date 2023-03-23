import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductId: []
  },
  reducers: {
    addToCart: (state, action) => { // 카트에 아이템 담기
      state.cartProductId = [action.payload, ...state.cartProductId]
      console.log(state.cartProductId)
    },
    removeFromCart: (state, action) => { // 카드에 담긴 아이템 삭제
      let reduplication = state.cartProductId.indexOf(action.payload)
      if(reduplication !== -1){state.cartProductId.splice(reduplication, 1)}
      //console.log(reduplication, state.cartProductId)
      console.log(state.cartProductId)
    },
    removeAll: (state) => { // 카트에 담긴 모든 아이템 삭제
      state.cartProductId = []
      // console.log('removeAll : ',action.payload, state)
    }
  }
})

export let {addToCart, removeFromCart, removeAll} = cartSlice.actions;

export default cartSlice;