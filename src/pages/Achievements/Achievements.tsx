import React from 'react';
import './Achievements.sass'
import Header from "../../widgets/header/Header";
import Hello from "../../shared/hello/Hello";
import NavBar from "../../widgets/navBar/NavBar";

const Achievements = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <section className='mainPage'>
          <Hello text={'Achievements'}/>
          <section className='achievements-container'>
            <section className='achievements'>

            </section>
            <section className='right-block'>
              <NavBar />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Achievements;
