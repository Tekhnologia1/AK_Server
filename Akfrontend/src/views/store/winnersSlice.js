



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import {apiurl} from '../../Api/apiurl'
// const API_BASE_URL = apiurl;


// const initialState = {
//   winners: [],
//   winnerSM: [],
//   schemeNames: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchWinnerDetails = createAsyncThunk(
//   'winners/fetchWinnerDetails',
//   async (value) => {
//     const response = await axios.post(`${API_BASE_URL}/winnerdata1`, value);
//     return response.data.data;
//   }
// );

// export const fetchWinnerDetailsMS = createAsyncThunk(
//   'winners/fetchWinnerDetailsMS',
//   async (v) => {
//     const response = await axios.post(`${API_BASE_URL}/winnerdata2`, v);
//     return response.data.data;
//   }
// );

// export const fetchSchemeName = createAsyncThunk(
//   'winners/fetchSchemeName',
//   async () => {
//     const response = await axios.get(`${API_BASE_URL}/getschemeName`);
//     return response.data.data;
//   }
// );

// const winnersSlice = createSlice({
//   name: 'winners',
//   initialState,
//   reducers: {
//     clearState: (state) => {
//       state.winners = [];
//       state.winnerSM = [];
//       state.schemeNames = [];
//       state.status = 'idle';
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWinnerDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchWinnerDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.winners = Array.isArray(action.payload) ? action.payload : [];
//       })
//       .addCase(fetchWinnerDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchWinnerDetailsMS.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchWinnerDetailsMS.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.winnerSM = Array.isArray(action.payload) ? action.payload : [];
//       })
//       .addCase(fetchWinnerDetailsMS.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchSchemeName.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchSchemeName.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.schemeNames = Array.isArray(action.payload) ? action.payload : [];
//       })
//       .addCase(fetchSchemeName.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearState } = winnersSlice.actions;

// export default winnersSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';  

const API_BASE_URL = apiurl;

// Initial state
const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};

// Async Thunks

// Fetch all employees
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/employees`);
    return response.data.data;
  }
);

// Create a new employee
export const createEmployee = createAsyncThunk(
  'employees/createEmployee',
  async (employeeData) => {
    const response = await axios.post(`${API_BASE_URL}/employees`, employeeData);
    return response.data.data;
  }
);

// Update an existing employee
export const updateEmployee = createAsyncThunk(
  'employees/updateEmployee',
  async ({ id, updatedData }) => {
    const response = await axios.put(`${API_BASE_URL}/employees/${id}`, updatedData);
    return response.data.data;
  }
);

// Delete an employee
export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id) => {
    await axios.delete(`${API_BASE_URL}/employees/${id}`);
    return id;  // Return the deleted employee's ID
  }
);

// Slice definition
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // Optionally, you can add synchronous reducers here (if needed)
  },
  extraReducers: (builder) => {
    builder
      // Fetch Employees
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create Employee
      .addCase(createEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees.push(action.payload); // Add new employee to state
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Employee
      .addCase(updateEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id
        );
        if (index !== -1) {
          state.employees[index] = action.payload; // Update employee in state
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Employee
      .addCase(deleteEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = state.employees.filter(
          (employee) => employee.id !== action.payload
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export default employeeSlice.reducer;
