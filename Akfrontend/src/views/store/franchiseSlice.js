import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';

const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

const initialState = {
  franchises: [],
  status: 'idle',
  error: null,
};

// Fetch all franchise IDs
export const fetchFranchises = createAsyncThunk(
  'franchises/fetchFranchises',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/GetAllFranchises`, { headers });
      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create a new franchise
export const createFranchise = createAsyncThunk(
  'franchises/createFranchise',
  async (franchiseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/CreateFranchise`, franchiseData, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Update an existing franchise
export const updateFranchise = createAsyncThunk(
  'franchises/updateFranchise',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/updateFranchiseById/${id}`, updatedData, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Delete a franchise
export const deleteFranchise = createAsyncThunk(
  'franchises/deleteFranchise',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/deleteFranchiseById/${id}`, { headers });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Slice definition
const franchiseSlice = createSlice({
  name: 'franchises',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Franchises
      .addCase(fetchFranchises.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFranchises.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.franchises = action.payload;
      })
      .addCase(fetchFranchises.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Create Franchise
      .addCase(createFranchise.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createFranchise.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.franchises = [...state.franchises, action.payload];
      })
      .addCase(createFranchise.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Update Franchise
      .addCase(updateFranchise.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateFranchise.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.franchises.findIndex((franchise) => franchise.id === action.payload.id);
        if (index !== -1) {
          state.franchises[index] = action.payload;
        }
      })
      .addCase(updateFranchise.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Delete Franchise
      .addCase(deleteFranchise.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteFranchise.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.franchises = state.franchises.filter((franchise) => franchise.id !== action.payload);
      })
      .addCase(deleteFranchise.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default franchiseSlice.reducer;
