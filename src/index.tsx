import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// global-setting
import { GlobalStyle } from "./shared/global";
import theme from "./shared/theme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  // global-setting
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
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