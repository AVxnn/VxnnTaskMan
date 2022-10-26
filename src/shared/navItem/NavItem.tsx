import React from 'react';
import {NavLink} from "react-router-dom";
import './NavItem.sass'

const NavItem = ({title, path, top, icon}: any) => {
  return (
    <>
      <NavLink to={path}>
        <section className={`nav-item ${top ? 'nav-item-small' : ''}`}>
          <h3 className='nav-item_title'>{title}</h3>
        </section>
      </NavLink>
    </>
  );
};

export default NavItem;
