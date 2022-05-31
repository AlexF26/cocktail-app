import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:drinkId" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
