import React, {useEffect, useState} from 'react';
import Header from "../../widgets/header/Header";
import './MainPage.sass'
import Hello from "../../shared/hello/Hello";
import Block from "../../shared/block/Block";
import Chart from "../../widgets/chart/Chart";
import Alert from "../../shared/alert/alert";
import NavBar from "../../widgets/navBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import Popup from "../../widgets/Popup/Popup";
import {setData, setWorked, setWorkedTime} from "../../entities/reducers/userSlice/userSlice";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../entities/firebase/Firebase";

const MainPage = () => {

  const value = useSelector((state: any) => state.user.data)

  const [start, setStart] = useState(value.worked)

  const [open, setOpen] = useState(false)

  const dispath = useDispatch()

  const changed = async (type) => {
    await updateDoc(doc(db, 'users', value.uid), {
      workedTime: type ? Date.now() : 0,
      worked: type
    })
  }

  const startHandler = () => {
    if (start) {
      changed(false)
      dispath(setData({...value, workedTime: '', worked: false}))
    } else {
      changed(true)
      dispath(setData({...value, workedTime: new Date().getTime(), worked: true}))
    }
    setStart(!start)
  }

  useEffect(() => {
    setStart(value.worked)
  }, [value])

  return (
    <>
      <div className='container'>
        {
          open && <Popup setOpen={setOpen} open={open}/>
        }
        <Header />
        <section className='mainPage'>
          <Hello text={''}/>
          <section className='blocks'>
            <section className='left-block'>
              <header className='header'>
                <Block delay={0} type={1} open={open} setOpen={setOpen} left={false} blocker={false} custom={false} header={'Worked today'} text={''} color={'#9685FF'}/>
                <Block delay={150} type={2} open={open} setOpen={setOpen} left={false} blocker={false} custom={false} header={'Need to work out'} text={'4:40'} color={'#FF85EB'}/>
                <Block delay={300} type={3} open={open} setOpen={setOpen} left={false} blocker={false} custom={true} header={'Hours worked per week'} text={``} color={'#FF8585'}/>
                <Block delay={450} type={4} open={open} setOpen={setOpen} left={true} blocker={true} custom={false} header={'Shock mode'} text={'18'} color={'#FF85EB'}/>
              </header>
              <div className='chart-block'>
                <div style={{animationDelay: '950ms'}} className='chart'>
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
            {
              start ? (
                <button onClick={() => startHandler()} className='start-btn secondColor'>
                  Go home
                </button>
              ) : (
                <button onClick={() => startHandler()} className='start-btn'>
                  Start working
                </button>
              )
            }
          </section>
        </section>
      </div>
    </>
  );
};

export default MainPage;
