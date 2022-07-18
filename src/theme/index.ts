import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "#fff",
          backgroundColor: "#011627",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "0.8rem",
          fontWeight: "bold",
          maxWidth: "250px",
        },
        arrow: {
          color: "#000814",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          paddingInline: "0px",
        },
      },
    },
  },
});

export default theme;
