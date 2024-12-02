
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const initialState = {
  cafeDeal1: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Fetch all deals for cafeDeal1
export const fetchCafeDeal1 = createAsyncThunk(
  'cafeDeal1/fetchCafeDeal1',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllCafeDeals`);
    return response.data[0]; // Adjust based on your API response
  }
);

// Create a new deal for cafeDeal1
export const createCafeDeal1 = createAsyncThunk(
  'cafeDeal1/createCafeDeal1',
  async (dealData) => {
    const response = await axios.post(`${API_BASE_URL}/CreateCafeDeal1Details`, dealData);
    return response.data;
  }
);

// Update an existing deal for cafeDeal1
export const updateCafeDeal1 = createAsyncThunk(
  'cafeDeal1/updateCafeDeal1',
  async ({ id, updatedData }) => {
    const response = await axios.put(`${API_BASE_URL}/UpdateCafeDeal1Details/${id}`, updatedData);
    return response.data;
  }
);

// Delete a deal for cafeDeal1
export const deleteCafeDeal1 = createAsyncThunk(
  'cafeDeal1/deleteCafeDeal1',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/DeleteCafeDeal1Details/${id}`);
    return id; // Return the deleted deal's ID
  }
);

// Cafe Deal1 slice definition
const cafeDeal1Slice = createSlice({
  name: 'cafeDeal1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch CafeDeal1
      .addCase(fetchCafeDeal1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCafeDeal1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafeDeal1 = action.payload; // Update cafeDeal1 with fetched data
      })
      .addCase(fetchCafeDeal1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create CafeDeal1
      .addCase(createCafeDeal1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCafeDeal1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafeDeal1.push(action.payload); // Add the new deal to the state
      })
      .addCase(createCafeDeal1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update CafeDeal1
      .addCase(updateCafeDeal1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCafeDeal1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.cafeDeal1.findIndex((deal) => deal.id === action.payload.id);
        if (index !== -1) {
          state.cafeDeal1[index] = action.payload; // Update the existing deal
        }
      })
      .addCase(updateCafeDeal1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete CafeDeal1
      .addCase(deleteCafeDeal1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCafeDeal1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafeDeal1 = state.cafeDeal1.filter((deal) => deal.id !== action.payload); // Remove the deleted deal
      })
      .addCase(deleteCafeDeal1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store configuration
export default cafeDeal1Slice.reducer;
