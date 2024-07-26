import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";
import { ContentContextProvider } from "./context/ContentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </React.StrictMode>
);
