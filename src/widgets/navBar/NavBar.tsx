import React from 'react';
import NavItem from "../../shared/navItem/NavItem";
import './NavBar.sass'

const NavBar = () => {

  const pathes = [
    {title: 'Schedule', path: '/schedule', top: true, icon: '', left: false, delay: 500},
    {title: 'Who is at work', path: '/whoWork', top: false, icon: '', left: false, delay: 650},
    {title: 'Achievements', path: '/achievements', top: true, icon: '', left: true, delay: 800},
  ]

  return (
    <>
      <section className='navBar'>
        {
          pathes.map((i: any, index: number) => (
            <NavItem title={i.title} delay={i.delay} path={i.path} top={i.top} left={i.left} index={index} icon={i.icon}/>
          ))
        }
      </section>
    </>
  );
};

export default NavBar;
