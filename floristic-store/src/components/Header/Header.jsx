import React from 'react';
import './Header.scss'
import {Brand} from "./Brand/Brand";
import {Navigation} from "./Navigation/Navigation";
import {VisitCard} from "./VisitCard/VisitCard";

const Header = (props) => {
    return (
        <header id="header" className="header">
            <Brand />
            <Navigation />
            <VisitCard />
        </header>
    )
};

export default Header;