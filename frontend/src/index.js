import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import contentsReducer, { contentsFetch } from "./slices/contentsSlice";
import { contentsApi } from "./slices/contentsApi";

const store = configureStore({
  reducer: {
    contents: contentsReducer,
    [contentsApi.reducerPath]: contentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentsApi.middleware),
});

store.dispatch(contentsFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
