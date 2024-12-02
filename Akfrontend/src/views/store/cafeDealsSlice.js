import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const initialState = {
  deals: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Fetch all deals
export const fetchDeals = createAsyncThunk(
  'deals/fetchDeals',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllCafeDeals`);
    console.log(response.data[0])
    return response.data[0]; // Adjust based on your API response
  }
);
// Create a new deal
export const createDeal = createAsyncThunk(
  'deals/createDeal',
  async (dealData) => {

    const response = await axios.post(`${API_BASE_URL}/CreateCafeDeal`, dealData);
    return response.data;
  }
);



// Update an existing deal
export const updateDeal = createAsyncThunk(
  'deals/updateDeal',
  async ({ id, updatedData }) => {
    const response = await axios.put(`${API_BASE_URL}/UpdateCafeDeals/${id}`, updatedData);
    return response.data;
  }
);

// Delete a deal
export const deleteDeal = createAsyncThunk(
  'deals/deleteDeal',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/DeleteCafeDeals/${id}`);
    return id; // Return the deleted deal's ID
  }
);

// Cafe Deals slice definition
const cafeDealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    // Optionally, add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch Deals
      .addCase(fetchDeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deals = action.payload; // Update deals with fetched data
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Deal
      .addCase(createDeal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deals.push(action.payload); // Add the new deal to the state
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Deal
      .addCase(updateDeal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateDeal.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.deals.findIndex((deal) => deal.id === action.payload.id);
        if (index !== -1) {
          state.deals[index] = action.payload; // Update the existing deal
        }
      })
      .addCase(updateDeal.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Deal
      .addCase(deleteDeal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deals = state.deals.filter((deal) => deal.id !== action.payload); // Remove the deleted deal
      })
      .addCase(deleteDeal.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store configuration
export default cafeDealsSlice.reducer;

// Optional: Export actions if you have synchronous reducers
export const {} = cafeDealsSlice.actions; // Add any actions here if needed
