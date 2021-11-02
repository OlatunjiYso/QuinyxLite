import React from 'react';

import './layout.css';
import Navbar from './navbar';
import Footer from './footer';
import Main from './main';



const Layout = () => {

    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    )
}


export default Layout;