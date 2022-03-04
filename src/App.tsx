import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import Theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
