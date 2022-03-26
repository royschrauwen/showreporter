import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#b71234",
    },
    secondary: {
      main: "#12b796",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto Slab",
    },
    h2: {
      fontFamily: "Roboto Slab",
    },
    h3: {
      fontFamily: "Roboto Slab",
    },
    h4: {
      fontFamily: "Roboto Slab",
    },
    h5: {
      fontFamily: "Roboto Slab",
    },
    h6: {
      fontFamily: "Roboto Slab",
    },
    fontFamily: "Open Sans",
    button: {
      fontFamily: "Roboto Slab",
    },
  },
};

const theme = createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
