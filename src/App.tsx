import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/Header";

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Card = React.lazy(() => import('./pages/cards/Card'));
const Cart = React.lazy(() => import('./pages/E-commerce/Cart'));
const Price = React.lazy(() => import('./pages/pricing/Price'));
const Forms = React.lazy(() => import('./pages/forms/Forms'));
const Footer = React.lazy(() => import('./pages/footer/Footer'));
const Button = React.lazy(() => import('./pages/button/Button'));
const Input = React.lazy(() => import('./pages/input/Input'));



// Router wrapper to handle hiding header
const AppRouter = () => {
  const location = useLocation();

  const hideHeaderRouter = [
    '/dashboard',
    '/card',
    '/price',
    '/cart',
    '/form',
    '/footer',
    '/button',
    '/input'
  ];  

  const hideHeader = hideHeaderRouter.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!hideHeader && <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />

          {/* Routes wrapped in MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/card" element={<Card />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/price" element={<Price />} />
            <Route path="/form" element={<Forms />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/button" element={<Button />} />
            <Route path="/input" element={<Input />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
