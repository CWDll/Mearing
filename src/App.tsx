import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import pages
import MainPage from './pages/MainPage/MainPage';
import CenterPage from './pages/CenterPage/CenterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/center" element={<CenterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
