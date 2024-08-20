import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const booksFetch = createAsyncThunk("books/booksFetch", async () => {
  try {
    const response = await axios.post(`${url}/books`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const booksCreate = createAsyncThunk(
  "books/booksCreate",
  async (values, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const headers = setHeaders();
      console.log("Request headers:", headers);

      if (!headers.headers.Authorization) {
        throw new Error("No authorization token available");
      }

      // Validate that required fields are present
      if (!values.title || !values.about || !values.cover || !values.content) {
        throw new Error("Missing required fields");
      }

      console.log("Request payload:", values);

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
      .addCase(booksFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(booksFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(booksFetch.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(booksCreate.pending, (state, action) => {
        state.createStatus = "pending";
      })
      .addCase(booksCreate.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.createStatus = "success";
        toast.success("book Created!");
      })
      .addCase(booksCreate.rejected, (state, action) => {
        state.createStatus = "rejected";
      });
  },
});

export default booksSlice.reducer;
