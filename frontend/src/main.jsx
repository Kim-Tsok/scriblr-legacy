import React from "react";
import { Client } from "appwrite";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import contentsReducer, { contentsFetch } from "./slices/contentSlice";
import { contentsApi } from "./slices/contentApi";

const store = configureStore({
  reducer: {
    contents: contentsReducer,
    [contentsApi.reducerPath]: contentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentsApi.middleware),
});

store.dispatch(contentsFetch());

import "./index.css";
import { ContentContextProvider } from "./context/ContentContext.jsx";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a906bd0033565f5a6a");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContentContextProvider>
        <App />
      </ContentContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
