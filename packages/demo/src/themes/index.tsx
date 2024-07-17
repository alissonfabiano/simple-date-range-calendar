import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#e8f0fe",
      light: "#c3daf9",
    },
    text: {
      primary: "#000",
      secondary: "#ccc",
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#6987bc",
      light: "#3949ab",
    },
    text: {
      primary: "#fff",
      secondary: "#666",
    },
    background: {
      default: "#121212",
    },
  },
});
