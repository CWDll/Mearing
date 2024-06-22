import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./shared/global";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
// global-setting
import theme from "./shared/theme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  // global-setting
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

reportWebVitals(console.log);

// initial code
/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
