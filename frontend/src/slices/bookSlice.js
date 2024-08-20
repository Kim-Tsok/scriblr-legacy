import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const booksCreate = createAsyncThunk(
  "books/booksCreate",
  async (values, { rejectWithValue }) => {
    try {
      const headers = setHeaders();
      if (!headers.headers.Authorization) {
        throw new Error("No authorization token available");
      }

      const response = await axios.post(`${url}/books`, values, headers);
      return response.data;
    } catch (error) {
      console.log("Error details:", error.response || error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksCreate.pending, (state) => {
        state.createStatus = "pending";
      })
      .addCase(booksCreate.fulfilled, (state, action) => {
        if (state.items) {
          state.items.push(action.payload);
        } else {
          state.items = [action.payload];
        }
        state.createStatus = "success";
        toast.success("Book Created!");
      })
      .addCase(booksCreate.rejected, (state, action) => {
        state.createStatus = "rejected";
        toast.error(action.payload || "Failed to create book");
      });
  },
});

export default booksSlice.reducer;
