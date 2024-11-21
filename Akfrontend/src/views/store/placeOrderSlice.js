import { createSlice } from '@reduxjs/toolkit';

// Initial state for login and registration
const initialState = {
  data: null,
  cafe: null,
  cartProducts: [],     
  status: 'idle',       
  error: null,          
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.values;
      state.cafe = action.payload.cafe;
    },
    addProduct: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartProducts.find((product) => product.product_id === id);
      if (product) {
        product.quantity = quantity;
        product.sub_total_amount = quantity * product.rate;
      }
    },
    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(item => item.product_id !== action.payload);
    },
    saveRepeat: (state, action) => {
      state.data = action.payload.data;
      state.cartProducts = action.payload.products;
      state.cafe = action.payload.cafe;
    },
    clearAllData: (state) => {
      state.data = null;
      state.cafe = null;
      state.cartProducts = [];
      state.status = 'idle';
      state.error = null;
    }
  },
});

export const { setData, addProduct, updateProductQuantity, removeProduct, saveRepeat, clearAllData } = orderSlice.actions;
export default orderSlice.reducer;
