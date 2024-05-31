import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import MainPage from "./pages/MainPage/MainPage";
import CenterPage from "./pages/CenterPage/CenterPage";
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/center" element={<CenterPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
