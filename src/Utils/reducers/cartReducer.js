import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    productList: [],
}

export const cartReducer = createSlice({
  name: 'Cart',
  initialState: initialState,
  reducers: {
    setAddCart: (state, action) => {
        state.productList = [...state.productList, action.payload];
        state.totalCount += 1;
    },
    setRemoveCart: (state, action) => {
        const productId = action.payload;
        state.totalCount -= 1;
        state.productsList = state.productsList.filter(product => product.id !== productId);
      }
    }
  
})

export const { setAddCart, setRemoveCart } = cartReducer.actions;

export default cartReducer.reducer;