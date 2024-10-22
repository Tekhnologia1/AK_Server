// store.js
import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './apiSlice';

import uiReducer from './uiSlice'
import employeeReducer from './employeeSlice';
import loginReducer from './loginSlice'

export default configureStore({
  reducer: {
    ui: uiReducer,
    employees: employeeReducer,
    auth: loginReducer, 
    
  
  },
});




















