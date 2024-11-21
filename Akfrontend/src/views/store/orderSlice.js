import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl"; // Your API URL
const API_BASE_URL = apiurl;

const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

// Fetch all orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async () => {

    const response = await axios.get(`${API_BASE_URL}/GetAllCafeOrders`);
    return response.data.orders; // Assuming the response contains a 'products' field
  }
);

// Create Order
// Create a new cafe
export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (payload) => {
    const response = await axios.post(`${API_BASE_URL}/CreateCafeOrder`, payload);
    return response.data;
  }
);

// Create the slice
const productSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })      

      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = [...state.orders, action.payload];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default productSlice.reducer;
