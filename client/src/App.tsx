import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import MainPage from "./pages/MainPage/MainPage";
import CenterPage from "./pages/CenterPage/CenterPage";
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/center" element={<CenterPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
