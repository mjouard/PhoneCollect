import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductPage from './components/ProductPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from './components/pages/SingleProductPage';
import CardOffCanvas from './components/common/CardOffCanvas';
import PaymentPage from './components/pages/PaymentPage';
import AdminPage from './components/pages/AdminPage';
import LoginPage from './components/pages/LoginPage';
import Navbar from './components/common/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="products/" element={<ProductPage />} />
        <Route path="products/:productType" element={<ProductPage />} />
        <Route path="product/:name/:id" element={<SingleProductPage />} />
        <Route path="canvas" element={<CardOffCanvas />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
);

