import React from "react";
import './Navigation.scss'

export const Navigation = () => {
  return (
      <nav className="nav">
          <ul className="list">
              <li><a className="link" href="#">Главная</a></li>
              <li><a className="link" href="#">О компании</a></li>
              <li><a className="link" href="#">Товары</a></li>
              <li><a className="link" href="#">Новости</a></li>
              <li><a className="link" href="#">Контакты</a></li>
          </ul>
      </nav>
  )
};