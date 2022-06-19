import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./AppProviders";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";
import Root from "./views/Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProviders>
        <Root />
      </AppProviders>
    </AuthProvider>
  </React.StrictMode>
);
