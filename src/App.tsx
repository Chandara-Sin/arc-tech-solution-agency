import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import PublicRoutes from "./routes";
import Theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PublicRoutes />
    </ThemeProvider>
  );
}

export default App;
