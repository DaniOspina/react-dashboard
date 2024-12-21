import React from "react";
import ReactDOM from "react-dom/client"; // Cambiado a 'react-dom/client'
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// Busca el elemento raíz
const rootElement = document.getElementById("root");

// Usa createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

