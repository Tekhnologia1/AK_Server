import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../../Api/apiurl"; // Your API URL
const API_BASE_URL = apiurl;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const initialState = {
  products: [],
  dealProducts:{},
  masterProducts: [], // New field
  fillingTypes: [],   // New field
  status: "idle",
  error: null,
};

// Fetch master products
export const fetchMasterProducts = createAsyncThunk(
  "products/fetchMasterProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllProductMaster`);
      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch master products");
    }
  }
);

// Fetch filling types
export const fetchFillingTypes = createAsyncThunk(
  "products/fetchFillingTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllFillingTypes`);
      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch filling types");
    }
  }
);

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/GetAllProduct`);
      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);

// Fetch deal products
export const fetchDealProducts = createAsyncThunk(
  "products/fetchDealProducts",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/GetAllDealsProducts/${id}`);
      console.log("check cafe id",response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);

// Create a new product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/createProduct`, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to create product");
    }
  }
);

// Update a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ updatedData, id }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/UpdateProduct/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update product");
    }
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/deleteProductById/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete product");
    }
  }
);

// Create the slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
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
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Deal Products
      .addCase(fetchDealProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDealProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dealProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchDealProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload);
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Master Products
      .addCase(fetchMasterProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMasterProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.masterProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchMasterProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Filling Types
      .addCase(fetchFillingTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFillingTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fillingTypes = action.payload;
        state.error = null;
      })
      .addCase(fetchFillingTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
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
          state.products[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
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
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearError } = productSlice.actions;
export default productSlice.reducer;
