import React from 'react';
import './Header.scss'
import {Brand} from "./Brand/Brand";
import {Navigation} from "./Navigation/Navigation";
import {VisitCard} from "./VisitCard/VisitCard";

export const Header = (props) => {
    return (
        <header id="header" className="header">
            <Brand />
            <Navigation />
            <VisitCard />
        </header>
    )
};