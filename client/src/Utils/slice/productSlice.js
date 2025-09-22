// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../axios";

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
//   currentPage: 0,
//   limit: 2,
//   totalCount: 0,
// };

// // ✅ Fetch Products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { currentPage, limit } = getState().products;
//       const res = await axiosInstance.get(
//         `/products/getProducts?page=${currentPage + 1}&limit=${limit}`
//       );

//       return res.data || { data: [], total: 0, page: 1, pages: 1 };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to fetch products");
//     }
//   }
// );

// // ✅ Add Product
// export const addProduct = createAsyncThunk(
//   "products/addProduct",
//   async (productData, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/products", productData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to add product");
//     }
//   }
// );

// // ✅ Update Product
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, productData }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.put(`/products/${id}`, productData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to update product");
//     }
//   }
// );

// // ✅ Delete Product
// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (id, { rejectWithValue }) => {
//     try {
//       await axiosInstance.delete(`/products/${id}`);
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to delete product");
//     }
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     resetProducts: (state) => {
//       state.data = [];
//       state.currentPage = 0;
//       state.totalCount = 0;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch products
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         const { data, total, page } = action.payload;

//         if (data?.length > 0) {
//         //   state.data = [...state.data, ...data]; // append for infinite scroll
//           state.data = data; // append for infinite scroll
//           state.currentPage = page;
//         }
//         state.totalCount = total;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Add product
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.data.unshift(action.payload); // add new product on top
//       })
//       .addCase(addProduct.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       // Update product
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         state.data = state.data.map((p) =>
//           p._id === action.payload._id ? action.payload : p
//         );
//       })
//       .addCase(updateProduct.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       // Delete product
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.data = state.data.filter((p) => p._id !== action.payload);
//       })
//       .addCase(deleteProduct.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetProducts } = productSlice.actions;
// export default productSlice.reducer;


// ******************************************


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../axios";

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
//   currentPage: 1,
//   totalPages: 1,
//   limit: 8,
//   totalCount: 0,
// };

// // Fetch products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { currentPage, limit } = getState().products;
//       const res = await axiosInstance.get(
//         `/products/getProducts?page=${currentPage}&limit=${limit}`
//       );
//       return res.data || { data: [], total: 0, page: 1, pages: 1 };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to fetch products");
//     }
//   }
// );

// // Add product
// export const addProduct = createAsyncThunk(
//   "products/addProduct",
//   async (productData, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/products/addProducts", productData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to add product");
//     }
//   }
// );

// // Update product
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, productData }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.put(`/products/updateProduct/${id}`, productData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to update product");
//     }
//   }
// );

// // Delete product
// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (id, { rejectWithValue }) => {
//     try {
//       await axiosInstance.delete(`/products/deleteProduct/${id}`);
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to delete product");
//     }
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     resetProducts: (state) => {
//       state.data = [];
//       state.currentPage = 1;
//       state.totalPages = 1;
//       state.totalCount = 0;
//       state.error = null;
//     },
//     setPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         const { data, total, page, pages } = action.payload;
//         state.data = data;
//         state.currentPage = page;
//         state.totalPages = pages;
//         state.totalCount = total;
//         state.loading = false;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.data.unshift(action.payload);
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         state.data = state.data.map((p) =>
//           p._id === action.payload._id ? action.payload : p
//         );
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.data = state.data.filter((p) => p._id !== action.payload);
//       });
//   },
// });

// export const { resetProducts, setPage } = productSlice.actions;
// export default productSlice.reducer;


// **************************************************

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  limit: 8,
  totalCount: 0,
  sortBy: "Default", // Default, Price, Name
};

// Fetch products with pagination and sorting
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { currentPage, limit, sortBy } = getState().products;
      let sortParam = "";
      if (sortBy === "Price") sortParam = "salePrice";
      if (sortBy === "Name") sortParam = "name";

      const res = await axiosInstance.get(
        `/products/getProducts?page=${currentPage}&limit=${limit}&sort=${sortParam}`
      );

      return res.data || { data: [], total: 0, page: 1, pages: 1 };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);

// Add product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/products/addProducts", productData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add product");
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(`/products/updateProduct/${id}`, productData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update product");
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/products/deleteProduct/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete product");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.data = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.totalCount = 0;
      state.error = null;
      state.sortBy = "Default";
      state.limit = 8;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.currentPage = 1; // reset page when sorting changes
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.currentPage = 1; // reset page when limit changes
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { data, total, page, pages } = action.payload;
        state.data = data;
        state.currentPage = page;
        state.totalPages = pages;
        state.totalCount = total;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data.unshift(action.payload);
      })

      // Update
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.data = state.data.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      })

      // Delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p._id !== action.payload);
      });
  },
});

export const { resetProducts, setPage, setSortBy, setLimit } = productSlice.actions;
export default productSlice.reducer;
