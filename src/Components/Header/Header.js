import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='nav'>
            <Link to="/">Main</Link>
            <Link to='volunteers'>Volunteers</Link>
            <Link to='about'>About</Link>
        </nav>
        </div>
    );
};

export default Header;