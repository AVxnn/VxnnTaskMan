import React from 'react';
import NavItem from "../../shared/navItem/NavItem";
import './NavBar.sass'

const NavBar = () => {

  const params = window.location.pathname
  console.log(params)
  const pathes = [
    {title: 'Start work', path: '/', top: true, icon: '', left: false, delay: 500},
    {title: 'Schedule', path: '/schedule', top: true, icon: '', left: false, delay: 650},
    {title: 'Who is at work', path: '/whoWork', top: false, icon: '', left: false, delay: 800},
    {title: 'Achievements', path: '/achievements', top: true, icon: '', left: true, delay: 950},
  ]

  return (
    <>
      <section className='navBar'>
        {
          pathes.map((i: any, index: number) => {
            if (i.path !== params) {
              return <NavItem key={index} title={i.title} delay={index * 150} path={i.path} top={i.top} left={i.left} index={index} icon={i.icon}/>
            }
          })
        }
      </section>
    </>
  );
};

export default NavBar;
