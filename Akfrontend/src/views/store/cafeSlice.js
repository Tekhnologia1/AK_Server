import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';
const API_BASE_URL = apiurl;

const initialState = {
  cafes: [],
  specialDeals: [],
  status: 'idle',
  error: null,
};

// Fetch all cafes
export const fetchCafes = createAsyncThunk(
  'cafes/fetchCafes',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllCafes`);
    return response.data[0];
  }
);

// Fetch special deals
export const fetchSpecialDeals = createAsyncThunk(
  'cafes/fetchSpecialDeals',
  async () => {

    const response = await axios.get(`${API_BASE_URL}/GetAllPaymentTerms`);
    return response.data[0];
  }
);

// Create a new cafe
export const createCafe = createAsyncThunk(
  'cafes/createCafe',
  async (cafeData) => {
    const response = await axios.post(`${API_BASE_URL}/createCafe`, cafeData);
    return response.data;
  }
);
// Update an existing cafe
export const updateCafe = createAsyncThunk(
  'cafes/updateCafe',
  async ({ updatedData, id }) => { // Destructure the object to get updatedData and id
    console.log(updatedData); 
    console.log("id", id); 
    const response = await axios.put(`${API_BASE_URL}/UpdateCafe/${id}`, updatedData);
    return response.data; // Return the response data
  }
);


// Delete a cafe
export const deleteCafe = createAsyncThunk(
  'cafes/deleteCafe',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/deleteCafeById/${id}`);
    return id; // Return the deleted cafe's ID
  }
);

// Cafe slice definition
const cafeSlice = createSlice({
  name: 'cafes',
  initialState,
  reducers: {
    // Optionally, add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cafes
      .addCase(fetchCafes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCafes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafes = action.payload;
      })
      .addCase(fetchCafes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Special Deals
      .addCase(fetchSpecialDeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpecialDeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.specialDeals = action.payload;
      })
      .addCase(fetchSpecialDeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Cafe
      .addCase(createCafe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCafe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafes = [...state.cafes, action.payload];
      })
      .addCase(createCafe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Cafe
      .addCase(updateCafe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCafe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.cafes.findIndex((cafe) => cafe.id === action.payload.id);
        if (index !== -1) {
          state.cafes[index] = action.payload;
        }
      })
      .addCase(updateCafe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Cafe
      .addCase(deleteCafe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCafe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cafes = state.cafes.filter((cafe) => cafe.id !== action.payload);
      })
      .addCase(deleteCafe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store configuration
export default cafeSlice.reducer;
