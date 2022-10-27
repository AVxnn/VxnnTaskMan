import React from 'react';
import Header from "../../widgets/header/Header";
import './MainPage.sass'
import Hello from "../../shared/hello/Hello";
import Block from "../../shared/block/Block";
import Chart from "../../widgets/chart/Chart";
import Alert from "../../shared/alert/alert";
import NavBar from "../../widgets/navBar/NavBar";

const MainPage = () => {



  return (
    <div className='container'>
      <Header />
      <section className='mainPage'>
        <Hello />
        <section className='blocks'>
          <section className='left-block'>
            <header className='header'>
              <Block left={false} blocker={false} custom={false} header={'Worked today'} text={'3:20'} color={'#9685FF'}/>
              <Block left={false} blocker={false} custom={false} header={'Need to work out'} text={'4:40'} color={'#FF85EB'}/>
              <Block left={false} blocker={false} custom={true} header={'Hours worked per week'} text={'24 / 40'} color={'#FF8585'}/>
              <Block left={true} blocker={true} custom={false} header={'Shock mode'} text={'18'} color={'#FF85EB'}/>
            </header>
            <div className='chart-block'>
              <div className='chart'>
                <Chart />

              </div>
            </div>
          </section>
          <section className='right-block'>
            <NavBar />
          </section>
        </section>
        <section className='footer-main'>
          <section className='alert-block'>
            <Alert maxWidth={'316'} text={`Press the "Start working" button and start working. Have a nice working day!`}/>
          </section>
          <button className='start-btn'>
            Start working
          </button>
        </section>
      </section>
    </div>
  );
};

export default MainPage;
