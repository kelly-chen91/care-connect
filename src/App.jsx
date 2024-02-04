import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import mission from "./mission.png";
import LoginForm from "./loginform";
import logo from "./logo.png";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutPage from "./components/aboutPage";
import Error from "./components/Error";
import Portal from "./components/Portal.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portal" element={<Portal />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {/* <Outlet /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
