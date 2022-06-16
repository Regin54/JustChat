import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./AppProviders";
import "./index.css";
import Root from "./views/Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>
);
