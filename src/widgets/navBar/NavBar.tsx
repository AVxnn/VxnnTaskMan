import React from 'react';
import NavItem from "../../shared/navItem/NavItem";
import './NavBar.sass'

const NavBar = () => {

  const pathes = [
    {title: 'Schedule', path: '/schedule', top: true, icon: '', left: false},
    {title: 'Who is at work', path: '/whoWork', top: false, icon: '', left: false},
    {title: 'Achievements', path: '/achievements', top: true, icon: '', left: true},
  ]

  return (
    <>
      <section className='navBar'>
        {
          pathes.map((i: any, index: number) => (
            <NavItem title={i.title} path={i.path} top={i.top} left={i.left} index={index} icon={i.icon}/>
          ))
        }
      </section>
    </>
  );
};

export default NavBar;
