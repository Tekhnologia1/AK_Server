import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiurl } from '../../Api/apiurl';  
const API_BASE_URL = apiurl;

const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};


// Fetch all employees
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllEmployee`);
    return response.data.employees;
  }
);

// Create a new employee
export const createEmployee = createAsyncThunk(
  'employees/createEmployee',
  async (employeeData) => {
    console.log(employeeData)
    const response = await axios.post(`${API_BASE_URL}/AddEmployee`, employeeData);
    return response.data;
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
    await axios.delete(`${API_BASE_URL}/employee/${id}`);
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
