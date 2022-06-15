import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductElement } from "../../models/products";
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {}
  }
);
export const createProducts = createAsyncThunk(
  "product/createProducts",
  async (product: ProductElement) => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        product
      );
      return data;
    } catch (error) {}
  }
);
export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(createProducts.fulfilled, (state: any, action: any) => {
        state.value.push(action.payload)
      });
  },
});

export default ProductSlice.reducer;
