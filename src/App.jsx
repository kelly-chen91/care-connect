import { useState } from 'react'
import './App.css'

import AboutPage from './components/aboutPage';
import Layout from './components/Layout';
import Portal from './components/Portal';
import Error from './components/Error';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';


function App() {
  return (

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
    // <Layout />
  );
}

export default App;
