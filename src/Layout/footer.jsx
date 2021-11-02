import React from 'react';

import Logo from './Logo';

const Footer = () => (
    <div className="app-footer">
        <div className="footer-double-span footer-section">
            <div className="footer-logo-group">
                <span><Logo/></span>
                <span className="logo-text">  QuinyxLite</span>
            </div>
            <ul className="footer-section-listing">
                <li> Cookie Information </li>
                <li> Policy and Procedure </li>
                <li> Pricing </li>
            </ul>
        </div>
        <div className="footer-single-span footer-section">
            <h3 className="footer-section-heading"> Product</h3>
            <ul className="footer-section-listing">
                <li> Market Force </li>
                <li> Management </li>
                <li> AI Optimization </li>
                <li> Pricing </li>
            </ul>
        </div>
        <div className="footer-single-span  footer-section">
            <h3 className="footer-section-heading"> Quinyx</h3>
            <ul className="footer-section-listing">
                <li> Customer Cases </li>
                <li> About Us </li>
                <li> News & Press </li>
                <li> Career </li>
                <li> Book a Demo </li>
            </ul>
        </div>
        <div className="footer-single-span  footer-section">
            <h3 className="footer-section-heading"> Resources</h3>
            <ul className="footer-section-listing">
                <li> Blog </li>
                <li> Knowledge Hub </li>
                <li> Event and Webinars</li>
                <li> Product Hub </li>
            </ul>
        </div>
        <div className="footer-single-span  footer-section">
            <h3 className="footer-section-heading"> Help Center</h3>
            <ul className="footer-section-listing">
                <li> Market Force </li>
                <li> Management </li>
                <li> AI Optimization </li>
                <li> Pricing </li>
            </ul>
        </div>
    </div>
);


export default Footer;