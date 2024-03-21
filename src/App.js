import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Checkout from './components/checkout';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';

function CombinedComponents() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function CombinedComponentsTwo() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

function CombinedComponentsThree() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<CombinedComponents />} />
          <Route path="/checkout" element={<CombinedComponentsTwo />} />
          <Route path="/login" element={<CombinedComponentsThree />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
