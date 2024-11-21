import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';

const API_BASE_URL = apiurl;

const initialState = {
  usertype: [],
  users: [],
  specialDeals: [],
  status: 'idle',
  error: null,
};

// Fetch all user types
export const fetchUsertype = createAsyncThunk(
  'cafeusers/fetchUsertype',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllUserTypes`);
    return response.data[0];
  }
);

// Fetch all cafe users
export const fetchCafeUsers = createAsyncThunk(
  'cafeusers/fetchCafeUsers',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllCafeUsers`);
    return response.data[0];
  }
);

// Create a new cafe user
export const createCafeUser = createAsyncThunk(
  'cafeusers/createCafeUser',
  async (userData) => {

    console.log("objectjhgvhg",userData)
    const response = await axios.post(`${API_BASE_URL}/CreateCafeUser`, userData);
    return response.data;
  }
);
// Update an existing cafe user
export const updateCafeUser = createAsyncThunk(
  'cafeusers/updateCafeUser',
  async ({ id, updatedData }) => {
    console.log(id)
    console.log(updatedData)
    const response = await axios.put(`${API_BASE_URL}/UpdateCafeUser/${id}`, updatedData);
    return response.data;
  }
);

// Delete a cafe user
export const deleteCafeUser = createAsyncThunk(
  'cafeusers/deleteCafeUser',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/DeleteCafeUser/${id}`);
    return id;
  }
);

// Cafe slice definition
const cafeuserSlice = createSlice({
  name: 'cafeusers',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch User Type
      .addCase(fetchUsertype.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsertype.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.usertype = action.payload;
      })
      .addCase(fetchUsertype.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Cafe Users
      .addCase(fetchCafeUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCafeUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchCafeUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Cafe User
      .addCase(createCafeUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createCafeUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(createCafeUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Cafe User
      .addCase(updateCafeUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateCafeUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateCafeUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Cafe User
      .addCase(deleteCafeUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteCafeUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteCafeUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the actions
export const { resetError } = cafeuserSlice.actions;

// Export the reducer to be used in the store configuration
export default cafeuserSlice.reducer;
