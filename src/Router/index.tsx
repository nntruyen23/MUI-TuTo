import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import HomePage from '../Pages/HomePage';
import Home from '../Pages/HomePage/Home';
import Categories from '../Pages/HomePage/Categories';
import Products from '../Pages/HomePage/Products';
import Orders from '../Pages/HomePage/Orders';
import Users from '../Pages/HomePage/Users';
import Warehouse from '../Pages/HomePage/Warehouse';

// const LoginPage = lazy(() =>  import(""))
const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="auth/login" replace />} />
                <Route path='auth/login' element={<Login />}/>
                <Route path='auth/forgotpassword' element={<ForgotPassword />}/>

                <Route path="/" element={<HomePage />}>
                    <Route path="home" element={<Home />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                    <Route path="warehouse" element={<Warehouse />} />
                </Route>

            </Routes>
        </Router>  
    );
}

export default Routing