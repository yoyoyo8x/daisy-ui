import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "@/service/product.service";

export const menuSlice = createSlice({
  name: "product",
  initialState: {
    cate: [],
    list: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    //get
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      state.cate = [...new Set(action.payload?.map((item) => item.category))];
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default menuSlice.reducer;
