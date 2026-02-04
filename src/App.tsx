import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/Header";

// lazy pages
const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// card
const Card = React.lazy(()=>import('./pages/cards/Card'))

// e-commerce
const Cart = React.lazy(()=>import('./pages/E-commerce/Cart'))


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {/* Layout wrapper */}
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* card */}
            <Route path="/card" element={<Card />} />

            {/* cart */}
            <Route path="/cart" element={<Cart />} />


          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
