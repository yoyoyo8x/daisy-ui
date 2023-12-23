import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios.get(
      "https://jsonserver.reactbd.com/amazonpro"
    );
    return response.data;
  } catch (error) {
    return error.response.data.exception.message;
  }
});
