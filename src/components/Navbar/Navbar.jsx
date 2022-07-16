import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-3 bg-danger w-100">
        <nav>
          <ul className="nav__ul d-flex text-light">
            <li className="nav__link me-5">
              <NavLink to="/dashboard" className={({isActive}) => (isActive ? "active__link" : "navbar__tdn")}>
                Dashboard
              </NavLink>
            </li>
           <li className="nav__link me-5">
           <NavLink to="/books" className={({isActive}) => (isActive ? "active__link" : "navbar__tdn")}>
                Books
              </NavLink>
           </li>
             <li className="nav__link">
             <NavLink to="/control" className={({isActive}) => (isActive ? "active__link" : "navbar__tdn")}>
                Control
              </NavLink>
             </li>
          </ul>            
        </nav>
    </div>
  );
}

export default Navbar;
