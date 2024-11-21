import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl'; 

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
      return rejectWithValue(error.response.data); 
    }
  }
);

// Async thunk for registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;      
      state.status = 'idle';   
      state.error = null;      
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
        state.user = action.payload;  
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed'; 
      })

      // Handle registration
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;  
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Registration failed'; 
      });
  },
});

// Export actions and reducer
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
