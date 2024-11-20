import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#2e7d32",
  secondary: "#558b2f",
  success: "#4CAF50",
  info: "#00a2ff",
  warning: "#FFC107",
  danger: "#FF5722",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#f06292",
  border: "#DDDFE1",
  inverse: "#f06292",
  shaft: "#333",
  transparent: "#000000000",

  background: "#F5F5F5",

  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colors.primary,
          opacity: 0.7,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: Colors.white,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255, 0.8)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: Colors.white,
        },
      },
    },
  },
});

export default theme;
