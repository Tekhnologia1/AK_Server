import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl"; // Your API URL
const API_BASE_URL = apiurl;

const initialState = {
  products: [],
  masterProducts: [], // New field
  fillingTypes: [],   // New field
  status: "idle",
  error: null,
};



// Fetch master products
export const fetchMasterProducts = createAsyncThunk(
  "products/fetchMasterProducts",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllProductMaster`);
    return response.data[0];
  }
);

// Fetch filling types
export const fetchFillingTypes = createAsyncThunk(
  "products/fetchFillingTypes",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllFillingTypes`);
    return response.data[0]; // Assuming the response contains an array of filling types
  }
);


// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {

    const response = await axios.get(`${API_BASE_URL}/GetAllProduct`);
    return response.data[0]; // Assuming the response contains a 'products' field
  }
);

// Create a new producthttp://localhost:5000/createProduct
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData) => {
    const response = await axios.post(`${API_BASE_URL}/createProduct`, productData);
    return response.data; // Assuming the new product data is returned
  }
);

// Update an existing product
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ updatedData, id }) => {
//     const response = await axios.put(`${API_BASE_URL}/product/${id}`, updatedData);
//     return response.data;
//   }
// );

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ updatedData, id }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/UpdateProduct/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message; // Handle and pass the error
    }
  }
);
// Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    console.log(id)
    await axios.delete(`${API_BASE_URL}/deleteProductById/${id}`);
    return id; // Return the deleted product's ID
  }
);

// Create the slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload); // Add new product to state
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })



      .addCase(fetchMasterProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMasterProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.masterProducts = action.payload; // Update state with master products
      })
      .addCase(fetchMasterProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  
      // Fetch Filling Types
      .addCase(fetchFillingTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFillingTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fillingTypes = action.payload; // Update state with filling types
      })
      .addCase(fetchFillingTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Update Product
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload; // Update product in state
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });




      
  },
});

// Export actions and reducer
export default productSlice.reducer;
