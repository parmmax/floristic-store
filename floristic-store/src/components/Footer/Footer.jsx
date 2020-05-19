import React from 'react';
import './Footer.scss'
import {Navigation} from "../Header/Navigation/Navigation";

export const Footer = (props) => {
    return (
        <footer className="layoutFooter">
            <div className="footerNav">
                <ul className="list">
                    <li>
                        <ul>
                            <li>NEWS & EVENTS</li>
                            <li>TERMS & CONDITIONS</li>
                            <li>PRIVACY POLICY</li>
                            <li>RETURN POLICY</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>ABOUT US</li>
                            <li>NEWS</li>
                            <li>PRODUCTS</li>
                            <li>TESTIMONIALS</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>ADDRESS</li>
                            <li>USA, LOS ANGELES,
                                901 East E Street,
                                Wilmington, CA 90744</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>PHONES & E-MAIL</li>
                            <li>+1 (800) 123 1234,</li>
                            <li>+1 (800) 123 1234</li>
                            <li>E-mail: mail@demolink.org</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>NEWSLETTER</li>
                            <li><input type="text"/></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <span>Floristic © 2020 <a href="#">Privacy Policy</a></span>
            </div>
        </footer>
    )
};