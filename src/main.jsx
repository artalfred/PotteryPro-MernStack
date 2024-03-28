import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="1014897579096-4tl91bt0mrlejq3cetnvuls11anka8hn.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </BrowserRouter>
);
