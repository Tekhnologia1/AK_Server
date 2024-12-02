import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl"; // Your API URL
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


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

// Create order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/CreateCafeOrder`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

//Update Order status
export const updateOrderStatus = createAsyncThunk(
  "products/updateOrderStatus",
  async ({ updatedData, id }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/UpdatePaymentAndDeliveryStatus/${id}`, updatedData);
      return {id, updatedData};
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update product");
    }
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
        state.error = action.payload || action.error.message;
      })

      //Update Order Status
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        const updatedOrderIndex = state.orders.findIndex(order => order.cafe_order_id === action.payload.id);
        if (updatedOrderIndex !== -1) {
          state.orders[updatedOrderIndex] = {
            ...state.orders[updatedOrderIndex],
            ...action.payload.updatedData
          };
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

  },
});

// Export actions and reducer
export default productSlice.reducer;
