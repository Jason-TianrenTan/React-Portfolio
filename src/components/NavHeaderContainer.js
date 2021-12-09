import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

const NavHeaderContainer = () => {
    return (
        <div className='top-container'>
            <Navbar />
            <Header/>
        </div>
    )
}

export default NavHeaderContainer