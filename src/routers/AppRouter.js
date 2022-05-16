import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../components/Login';
import Register from '../components/Register';
import DashboarRouters from './DashboarRouters';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import '../styles/loadStyled.css'

const Div = styled.div`
    background-color: black;   
    width: 100vw;
    height: 100vh; 
`

const AppRouters = () => {
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <Div>
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
            </Div>
        )
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Login />
                         </PublicRouters>

                    } />

                    <Route path="/register" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Register />
                        </PublicRouters>

                    } />

                    <Route path="/*" element={
                        <PrivateRouters isAutentica={isLoggedIn}>
                            <DashboarRouters />
                        </PrivateRouters>
                    } />
                    

                </Routes>
            </BrowserRouter>

        </>



    );
};

export default AppRouters;
