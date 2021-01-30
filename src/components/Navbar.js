import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      ЗАМЕТКИ
    </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
            className="nav-link"
            to="/"
            exact
            >
              Главная
          </NavLink>          
        </li>
        <li className="nav-item">
          <NavLink 
              className="nav-link"
              to="/archive">
                Архив
            </NavLink>
        </li>
        <li className="nav-item nav-item--about">
          <NavLink 
              className="nav-link"
              to="/about">
                О приложении
            </NavLink>
        </li>
      </ul>
</nav>
)

export default Navbar
