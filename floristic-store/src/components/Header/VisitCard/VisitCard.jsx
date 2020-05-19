import React from "react";
import './Visitcard.scss'
import {PhoneIcon} from "../Icons/PhoneIcon/PhoneIcon";
import {HomeIcon} from "../Icons/HomeIcon/HomeIcon";

export const VisitCard = () => {
    return (
        <div className="visitCard">
            <div className="addressCard">
                <HomeIcon />
                <a href="#">Хлебозаводская, 49/2, ​Ивантеевка, Московская Обл.,​141281</a>
            </div>
            <div className="phoneCard">
                <PhoneIcon />
                <a href="#">+7 000 000-00-00</a>
                <a href="#">+7 000 000-00-00</a>
            </div>
        </div>
    )
};