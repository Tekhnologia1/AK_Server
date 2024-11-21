// store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice'
import employeeReducer from './employeeSlice';
import loginReducer from './loginSlice'
import areaReducer from './areaSlice'
import routeReducer from './routeSlice'
import productReducer from './productSlice'
import cafeReducer from './cafeSlice'
import cafeDealsReducer from './cafeDealsSlice'
import cafeuserReducer from './cafeuserSlice'
import cafeDeal1Reducer from './cafeDeal1Slice'
import placeOrderReducer from './placeOrderSlice'
import ordersReducer from "./orderSlice"

export default configureStore({
  reducer: {
    ui: uiReducer,
    employees: employeeReducer,
    auth: loginReducer, 
    areas: areaReducer, 
    routes: routeReducer,
    products: productReducer,
    cafes:cafeReducer,
    deals: cafeDealsReducer,
    cafeusers: cafeuserReducer,  
    cafeDeal1: cafeDeal1Reducer,
    placeOrder: placeOrderReducer,
    orders: ordersReducer
  },
});




















