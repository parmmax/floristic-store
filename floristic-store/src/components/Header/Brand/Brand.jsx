import React from "react";
import './Brand.scss';
import {Logo} from "../../Icons/Logo/Logo";

export const Brand = (props) => {
    return (
        <div className="brand">
            <Logo />
            <div className="container">
                <div className="companyName">Floristic</div>
                <div className="companyTagline">Цветочный бутик</div>
            </div>
        </div>
    )
};