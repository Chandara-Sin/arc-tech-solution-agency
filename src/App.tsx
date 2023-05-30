import { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./router";
import Theme from "./theme";

const App: FC = () => (
  <ThemeProvider theme={Theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
