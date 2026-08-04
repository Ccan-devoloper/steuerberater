import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PruefungsschemataPortal from "./components/PruefungsschemataPortal";
import HausaufgabenPortal from "./components/HausaufgabenPortal";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <PruefungsschemataPortal />
    <HausaufgabenPortal />
  </React.StrictMode>,
);
