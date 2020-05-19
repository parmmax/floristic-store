import React from 'react';
import './Header.scss'

export const Header = (props) => {
    return (
        <header >
            <nav id="menu" className="menu">
                <ul className="list">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
            </nav>
        </header>
    )
};