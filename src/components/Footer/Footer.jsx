import React from 'react';
import './Footer.css';
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p className='footerp'>Copyrigth ©{year}</p>
        </footer>
       
    );
}

export default Footer;