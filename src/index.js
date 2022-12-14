import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductPage from './components/ProductPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from './components/pages/SingleProductPage';
import CardOffCanvas from './components/common/CardOffCanvas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="products/" element={<ProductPage />} />
        <Route path="products/:productType" element={<ProductPage />} />
        <Route path="product/:name/:id" element={<SingleProductPage />} />
        <Route path="canvas" element={<CardOffCanvas />} />
      </Routes>
    </BrowserRouter>
);

