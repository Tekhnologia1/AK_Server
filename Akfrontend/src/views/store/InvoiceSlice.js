import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl"; // Your API URL
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const initialState = {
  invoices: [],
  status: "idle",
  error: null,
};

// Fetch all orders
export const fetchInvoices = createAsyncThunk(
  "orders/fetchInvoices",
  async () => {

    const response = await axios.get(`${API_BASE_URL}/GetAllCafeOrders`);
    return response.data;
  }
);



// Create the slice
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Fetch Invoices
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

  },
});

// Export actions and reducer
export default invoiceSlice.reducer;
