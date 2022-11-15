import React from 'react';
import {NavLink} from "react-router-dom";
import './NavItem.sass'
import award from '../../images/award.png'

const NavItem = ({key, title, path, top, left, icon, index, delay}: any) => {
  return (
    <>
      <NavLink style={{animationDelay: delay + 'ms'}} className={`nav-item-link`} to={path}>
        <section key={index} className={`nav-item ${top ? 'nav-item-small' : ''} ${left ? 'nav-item-left' : ''}`}>
          <h3 className='nav-item_title'>{title}</h3>
          <img className='nav-item_img' src={award} alt=""/>
        </section>
      </NavLink>
    </>
  );
};

export default NavItem;
