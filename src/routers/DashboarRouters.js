import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Search from '../components/Search';

const DashboarRouters = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />                
                <Route path="/formik" element={<Register />} />                
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/add" element={<Add />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>



    );
};

export default DashboarRouters;