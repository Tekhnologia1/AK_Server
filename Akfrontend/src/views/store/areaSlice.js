import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';  
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");



const initialState = {
  areas: [],
  cities: [],
  status: 'idle',
  error: null,
};

// Fetch all areas
export const fetchAreas = createAsyncThunk(
  'areas/fetchAreas',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/GetAllAreas`);
    return response.data[0];
  }
);

// Fetch all cities
export const fetchCities = createAsyncThunk(
  'areas/fetchCities',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/AllCities`);
    return response.data[0];
  }
);

// Create a new area
export const createArea = createAsyncThunk(
  'areas/createArea',
  async (areaData) => {
    const response = await axios.post(`${API_BASE_URL}/CreateAreas`, areaData);
    return response.data;
  }
);

// Update an existing area
// export const updateArea = createAsyncThunk(
//   'areas/updateArea',
//   async ({ id, updatedData }) => {

    
//     const response = await axios.put(`${API_BASE_URL}/updateAreaById/${id}`, updatedData);
//     return response.data;
//   }
// );




console.log(token)
export const updateArea = createAsyncThunk(
  'areas/updateArea',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/updateAreaById/${id}`, updatedData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Delete an area
export const deleteArea = createAsyncThunk(
  'areas/deleteArea',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/deleteAreaById/${id}`);
    return id;  
  }
);


// Slice definition
const areaSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    // Optionally, add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch Areas
      .addCase(fetchAreas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.areas = action.payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Cities
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Area
      .addCase(createArea.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createArea.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Use spread operator to ensure immutability
        state.areas = [...state.areas, action.payload]; 
      })
      .addCase(createArea.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Area
      .addCase(updateArea.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateArea.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // const index = state.areas.findIndex(
        //   (area) => area.id === action.payload.id
        // );
        // if (index !== -1) {
        //   state.areas[index] = action.payload;
        // }
      })
      .addCase(updateArea.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Area
      .addCase(deleteArea.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteArea.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.areas = state.areas.filter(
          (area) => area.id !== action.payload
        );
      })
      .addCase(deleteArea.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store configuration
export default areaSlice.reducer;









// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { apiurl } from '../../Api/apiurl';  
// const API_BASE_URL = apiurl;
// const token = localStorage.getItem("token");



// const initialState = {
//   areas: [],
//   cities: [],
//   status: 'idle',
//   error: null,
// };

// // Fetch all areas
// export const fetchAreas = createAsyncThunk(
//   'areas/fetchAreas',
//   async () => {
//     const response = await axios.get(`${API_BASE_URL}/GetAllAreas`, {
//       headers: {
//         Authorization: `Bearer ${token}`, 
//       },
//     });
//     return response.data[0];
//   }
// );

// // Fetch all cities
// export const fetchCities = createAsyncThunk(
//   'areas/fetchCities',
//   async () => {
//     const response = await axios.get(`${API_BASE_URL}/AllCities`);
//     return response.data[0];
//   }
// );

// // Create a new area
// export const createArea = createAsyncThunk(
//   'areas/createArea',
//   async (areaData) => {
//     const response = await axios.post(`${API_BASE_URL}/CreateAreas`, areaData);
//     return response.data;
//   }
// );

// // Update an existing area
// // export const updateArea = createAsyncThunk(
// //   'areas/updateArea',
// //   async ({ id, updatedData }) => {

    
// //     const response = await axios.put(`${API_BASE_URL}/updateAreaById/${id}`, updatedData);
// //     return response.data;
// //   }
// // );




// console.log(token)
// export const updateArea = createAsyncThunk(
//   'areas/updateArea',
//   async ({ id, updatedData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${API_BASE_URL}/updateAreaById/${id}`, updatedData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, 
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data.message);
//       }
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Delete an area
// export const deleteArea = createAsyncThunk(
//   'areas/deleteArea',
//   async (id) => {
//     await axios.delete(`${API_BASE_URL}/deleteAreaById/${id}`);
//     return id;  
//   }
// );


// // Slice definition
// const areaSlice = createSlice({
//   name: 'areas',
//   initialState,
//   reducers: {
//     // Optionally, add synchronous reducers here if needed
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch Areas
//       .addCase(fetchAreas.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAreas.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.areas = action.payload;
//       })
//       .addCase(fetchAreas.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })

//       // Fetch Cities
//       .addCase(fetchCities.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCities.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.cities = action.payload;
//       })
//       .addCase(fetchCities.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })

//       // Create Area
//       .addCase(createArea.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(createArea.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Use spread operator to ensure immutability
//         state.areas = [...state.areas, action.payload]; 
//       })
//       .addCase(createArea.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })

//       // Update Area
//       .addCase(updateArea.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(updateArea.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // const index = state.areas.findIndex(
//         //   (area) => area.id === action.payload.id
//         // );
//         // if (index !== -1) {
//         //   state.areas[index] = action.payload;
//         // }
//       })
//       .addCase(updateArea.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })

//       // Delete Area
//       .addCase(deleteArea.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(deleteArea.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.areas = state.areas.filter(
//           (area) => area.id !== action.payload
//         );
//       })
//       .addCase(deleteArea.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// // Export the reducer to be used in the store configuration
// export default areaSlice.reducer;
