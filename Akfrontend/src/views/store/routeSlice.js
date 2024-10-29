import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';  
const API_BASE_URL = apiurl;

const initialState = {
  routes: [],  
  cities: [],
  status: 'idle',
  error: null,
};

// Fetch all routes
export const fetchRoutes = createAsyncThunk(
  'routes/fetchRoutes',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllRoutes`);
    console.log(response.data)
    return response.data[0];
  }
);

// Fetch all cities
export const fetchCities = createAsyncThunk(
  'routes/fetchCities',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/AllCities`);
    return response.data; 
  }
);
// Create a new route
export const createRoute = createAsyncThunk(
  'routes/createRoute',
  async (routeData) => {
    const response = await axios.post(`${API_BASE_URL}/CreateRoutes`, routeData);
    return response.data; // Adjust based on your API response structure
  }
);
// Update an existing route
// export const updateRoute = createAsyncThunk(
//   'routes/updateRoute',
//   async ({ id, updatedData }) => {

//     console.log("id",id)
//     console.log("updatedData",updatedData)

//     const response = await axios.put(`${API_BASE_URL}/UpdateRoutes/${id}`, updatedData);
//     return response.data; // Adjust based on your API response structure
//   }
// );


export const updateRoute = createAsyncThunk(
  "routes/updateRoute",
  async ({ id, updatedData }) => {
    console.log("id:", id);
    console.log("updatedData:", updatedData);

    const response = await axios.put(`${API_BASE_URL}/UpdateRoutes/${id}`, updatedData);
    return response.data; // Adjust based on your API response structure
  }
);

// Delete a route
export const deleteRoute = createAsyncThunk(
  'routes/deleteRoute',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/deleteRoute/${id}`);
    return id;  // Return the deleted route's ID
  }
);

// Slice definition
const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Routes
      .addCase(fetchRoutes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.routes = action.payload; // Ensure this aligns with your API response
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Cities
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload; // Ensure this aligns with your API response
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Route
      .addCase(createRoute.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoute.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Use spread operator to ensure immutability
        state.routes = [...state.routes, action.payload]; 
      })
      .addCase(createRoute.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Route
      .addCase(updateRoute.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateRoute.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.routes.findIndex(
          (route) => route.id === action.payload.id
        );
        if (index !== -1) {
          state.routes[index] = action.payload; // Update the route
        }
      })
      .addCase(updateRoute.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Route
      .addCase(deleteRoute.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRoute.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.routes = state.routes.filter(
          (route) => route.id !== action.payload // Remove the deleted route
        );
      })
      .addCase(deleteRoute.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store configuration
export default routeSlice.reducer;
