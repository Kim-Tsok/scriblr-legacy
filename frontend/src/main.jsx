import React from "react";
import { Client } from "appwrite";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";
import { ContentContextProvider } from "./context/ContentContext.jsx";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a906bd0033565f5a6a");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </React.StrictMode>
);
