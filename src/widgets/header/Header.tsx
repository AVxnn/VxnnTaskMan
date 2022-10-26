import React from 'react';
import Logotype from "../../shared/logotype/Logotype";
import './header.sass'
import Moment from "react-moment";

const Header = () => {

  const data = new Date()

  return (
    <>
      <header className="header">
        <section className='header-logotype'>
          <Logotype />
        </section>
        <section className="header-time">
          <span className="header-time-span">Now</span>
          <span className="header-time-data"><Moment format="HH:mm" local>{data}</Moment></span>
          <span className="header-time-span">time</span>
        </section>
      </header>
    </>
  );
};

export default Header;
