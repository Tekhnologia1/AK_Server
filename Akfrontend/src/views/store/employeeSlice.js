


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { apiurl } from "../../Api/apiurl";

// const API_BASE_URL = apiurl;

// const initialState = {
//   employees: [],
//   status: "idle", // "idle" | "loading" | "succeeded" | "failed"
//   error: null,
// };

// // Fetch all employees
// export const fetchEmployees = createAsyncThunk(
//   "employees/fetchEmployees",
//   async () => {
//     const response = await axios.get(`${API_BASE_URL}/getAllEmployee`);
//     return response.data.employees;
//   }
// );

// // Create a new employee
// export const createEmployee = createAsyncThunk(
//   "employees/createEmployee",
//   async (employeeData) => {
//     try {

//       console.log("employeeData",employeeData)
//       const response = await axios.post(`${API_BASE_URL}/AddEmployee`, employeeData);
//       return response.data;
//     } catch (error) {
//       throw error.response.data || error.message; // Handle and pass error
//     }
//   }
// );

// // Update an existing employee
// export const updateEmployee = createAsyncThunk(
//   "employees/updateEmployee",
//   async ({ updatedData, id }) => {
//     try {
//       console.log("dfd",updatedData)
//       const response = await axios.put(`${API_BASE_URL}/employee/${id}`, updatedData);
//       return response.data;
//     } catch (error) {
//       throw error.response.data || error.message; // Handle and pass error
//     }
//   }
// );

// // Delete an employee
// export const deleteEmployee = createAsyncThunk(
//   "employees/deleteEmployee",
//   async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/employee/${id}`);
//       return id; // Return the deleted employee's ID
//     } catch (error) {
//       throw error.response.data || error.message; // Handle and pass error
//     }
//   }
// );

// // Slice definition
// const employeeSlice = createSlice({
//   name: "employees",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Employees
//       .addCase(fetchEmployees.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.employees = action.payload;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       // Create Employee
//       .addCase(createEmployee.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(createEmployee.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.employees.push(action.payload); // Add new employee to state
//       })
//       .addCase(createEmployee.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       // Update Employee
//       .addCase(updateEmployee.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(updateEmployee.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         const index = state.employees.findIndex(
//           (employee) => employee.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.employees[index] = action.payload; // Update employee in state
//         }
//       })
//       .addCase(updateEmployee.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       // Delete Employee
//       .addCase(deleteEmployee.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(deleteEmployee.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.employees = state.employees.filter(
//           (employee) => employee.id !== action.payload
//         );
//       })
//       .addCase(deleteEmployee.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// // Export reducer
// export default employeeSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl";

const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const initialState = {
  employees: [],
  employeeTypes: [], // New state for employee types
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// Fetch all employees
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllEmployee`
    );
    return response.data.employees;
  }
);

// Fetch all employee types
export const fetchEmployeeTypes = createAsyncThunk(
  "employees/fetchEmployeeTypes",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllEmployeeTypes`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response.data.employeeTypes[0])
    return response.data.employeeTypes[0]; // Adjust according to your API response structure
  }
);

// Create a new employee
export const createEmployee = createAsyncThunk(
  "employees/createEmployee",
  async (employeeData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/AddEmployee`, employeeData);
      return response.data;
    } catch (error) {
      throw error.response.data || error.message; // Handle and pass error
    }
  }
);

// New thunk to add employee type
export const createEmployeeType = createAsyncThunk(
  "employees/createEmployeeType",
  async (employeeTypeData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/AddEmployeeType`, employeeTypeData);
      return response.data; // Assuming the response returns the added employee type
    } catch (error) {
      throw error.response.data || error.message; // Handle and pass error
    }
  }
);

// Update an existing employee
export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async ({ updatedData, id }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/employee/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data || error.message; // Handle and pass error
    }
  }
);

// Delete an employee
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/employee/${id}`);
      return id; // Return the deleted employee's ID
    } catch (error) {
      throw error.response.data || error.message; // Handle and pass error
    }
  }
);

// Slice definition
const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Employees
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch Employee Types
      .addCase(fetchEmployeeTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployeeTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employeeTypes = action.payload; // Add employee types to state
      })
      .addCase(fetchEmployeeTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create Employee
      .addCase(createEmployee.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees.push(action.payload); // Add new employee to state
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create Employee Type
      .addCase(createEmployeeType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEmployeeType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employeeTypes.push(action.payload); // Add new employee type to state
      })
      .addCase(createEmployeeType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Update Employee
      .addCase(updateEmployee.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id
        );
        if (index !== -1) {
          state.employees[index] = action.payload; // Update employee in state
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Delete Employee
      .addCase(deleteEmployee.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = state.employees.filter(
          (employee) => employee.id !== action.payload
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export reducer
export default employeeSlice.reducer;
