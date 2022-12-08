import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Page from './components/Page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Page />} />
        </Route>
        <Route path="products" element={<Home />} />
      </Routes>
    </BrowserRouter>
);

