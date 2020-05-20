import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.scss'

export const Navigation = () => {
  return (
      <nav className="nav">
          <ul className="list">
              <li><NavLink className="link"
                           to='/'>Главная</NavLink></li>
              <li><NavLink className="link"
                           to='/about'>О компании</NavLink></li>
              <li><NavLink className="link"
                           to='/products'>Товары</NavLink></li>
              <li><NavLink className="link"
                           to='/news'>Новости</NavLink></li>
              <li><NavLink className="link"
                           to='/contacts'>Контакты</NavLink></li>
              {/*<li><a className="link" href="#">Главная</a></li>*/}
              {/*<li><a className="link" href="#">О компании</a></li>*/}
              {/*<li><a className="link" href="#">Товары</a></li>*/}
              {/*<li><a className="link" href="#">Новости</a></li>*/}
              {/*<li><a className="link" href="#">Контакты</a></li>*/}
          </ul>
      </nav>
  )
};