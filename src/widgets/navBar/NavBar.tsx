import React from 'react';
import NavItem from "../../shared/navItem/NavItem";
import './NavBar.sass'

const NavBar = () => {

  const pathes = [
    {title: 'Schedule', path: '/schedule', top: true, icon: ''},
    {title: 'Who is at work', path: '/whoWork', top: false, icon: ''},
    {title: 'Achievements', path: '/achievements', top: true, icon: ''},
  ]

  return (
    <>
      <section className='navBar'>
        {
          pathes.map((i: any) => (
            <NavItem title={i.title} path={i.path} top={i.top} icon={i.icon}/>

          ))
        }
      </section>
    </>
  );
};

export default NavBar;
