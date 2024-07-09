// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/productlist';
import CartIcon from './components/carticon';
import Cart from './components/cart';
import Login from './components/login';
import LoginAPI from './components/loginAPI';
import Register from './components/register';
import Logout from './components/logout';
import logo from './assets/logo.png';
import Footer from './components/footer'; // Import Footer component

import './App.css';

const App = () => {
  const user = useSelector((state) => state.auth ? state.auth.user : null);

  return (
    <Router>
      <div className="app">
        <header>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1>YOYO STORE</h1>
          </div>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">
              <CartIcon />
            </Link>
            {user ? (
              <>
                <span className="welcome-message">Welcome, {user.email}!</span>
                <Logout />
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/login-api">Login with API</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-api" element={<LoginAPI />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer /> {/* Tambahkan Footer di sini */}
      </div>
    </Router>
  );
};

export default App;
