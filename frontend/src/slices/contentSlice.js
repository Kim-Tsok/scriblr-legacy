import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const contentsFetch = createAsyncThunk(
  "contents/contentsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/books`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const contentsCreate = createAsyncThunk(
  "contents/contentsCreate",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/books`, values, setHeaders());
      return response.data;
    } catch (error) {
      console.log("Error details:", error.response || error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contentsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(contentsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(contentsFetch.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(contentsCreate.pending, (state, action) => {
        state.createStatus = "pending";
      })
      .addCase(contentsCreate.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.createStatus = "success";
        toast.success("content Created!");
      })
      .addCase(contentsCreate.rejected, (state, action) => {
        state.createStatus = "rejected";
      });
  },
});

export default contentsSlice.reducer;
