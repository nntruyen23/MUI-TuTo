import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="auth/login" replace />} />
                <Route path='auth/login' element={<Login />}/>
                <Route path='auth/forgotpassword' element={<ForgotPassword />}/>
            </Routes>
        </Router>  
    );
}

export default Routing