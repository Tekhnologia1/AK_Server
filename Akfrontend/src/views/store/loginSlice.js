import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl'; // Replace with your actual API base URL

const API_BASE_URL = apiurl;

// Initial state for login and registration
const initialState = {
  user: null,           
  status: 'idle',       
  error: null,          
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      console.log("login data ",response);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message
    }
  }
);

// Async thunk for registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;  // Assuming response.data contains user info
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message
    }
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;      // Clear user data on logout
      state.status = 'idle';   // Reset status
      state.error = null;      // Clear error messages
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("inside login user success",action.payload)
        state.status = 'succeeded';
        state.user = action.payload;  // Store user data
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed'; // Set error message
      })

      // Handle registration
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;  // Store user data after registration
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Registration failed'; // Set error message
      });
  },
});

// Export actions and reducer
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
