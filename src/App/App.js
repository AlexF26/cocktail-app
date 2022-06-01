import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
