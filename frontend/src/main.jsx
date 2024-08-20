import React from "react";
import { Client } from "appwrite";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import booksReducer, { booksFetch } from "./slices/bookSlice";
import { booksApi } from "./slices/bookApi";
import axios from "axios";

const store = configureStore({
  reducer: {
    contents: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

store.dispatch(booksFetch());

import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ContentContextProvider } from "./context/ContentContext.jsx";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a906bd0033565f5a6a");

axios.defaults.maxContentLength = 50 * 1024 * 1024; // 50 MB
axios.defaults.maxBodyLength = 50 * 1024 * 1024; // 50 MB
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContentContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ContentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
