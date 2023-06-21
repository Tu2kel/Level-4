import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import MovieProvider from "./MovieProvider";
import MovieProvider from "../components/MovieProvider";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
