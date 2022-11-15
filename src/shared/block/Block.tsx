import React, {useEffect, useState} from 'react';
import './block.sass'
import Popup from "../../widgets/Popup/Popup";
import Moment from "react-moment";
import {useSelector} from "react-redux";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../entities/firebase/Firebase";
import numberOfDay from "../../entities/NumberOfDay/numberOfDay";

const Block = ({time, blocker, type, color, header, left, text, custom, delay, setOpen, open}) : any => {

  const value = useSelector((state: any) => state.user)

  const [timeS, setTimeS] = useState() as any
  const [timeL, setTimeL] = useState() as any
  const [interval, setInterval] = useState() as any
  const [worked, setWorked] = useState(value.worked) as any

  if (blocker && window.innerWidth <= 768) {
      return null
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeS(time)
    setTimeL(time + value.limitDay / 5 * 60 * 60 * 1000)
    setInterval(value.limitDay / 5)
    console.log(value.worked)
    setWorked(value.worked)
  }, [time, value.worked, value.limitDay])

  if(type === 1) {
    return (
      <>
        <div style={{backgroundColor: color, animationDelay: delay + 'ms'}} className={`block ${left ? 'block-left' : ''}`}>
          <p className='title'>{header}</p>
          <h2 className='text'><Moment date={timeS} format="h:mm" durationFromNow></Moment></h2>
        </div>
      </>
    );
  }

  if(type === 2) {
    return (
      <>
        <div style={{backgroundColor: color, animationDelay: delay + 'ms'}} className={`block ${left ? 'block-left' : ''}`}>
          <p className='title'>{header}</p>
          {
            !worked ? (
              <h2 className='text'>{interval}:00</h2>
            ) : (
              <h2 className='text'><Moment date={timeL} format="h:mm" durationFromNow></Moment></h2>
            )
          }
        </div>
      </>
    );
  }

  if(type === 3) {
    return (
      <>
        <div style={{backgroundColor: color, animationDelay: delay + 'ms', flexDirection: 'row', alignItems: 'flex-end', marginRight: '0'}} className='block'>
          <div style={{marginRight: '15px'}} className='block-container'>
            <p className='title'>{header}</p>
            <h2 className='text'><Moment date={timeS} format="hh" durationFromNow></Moment>{` / ${value.limitDay}`}</h2>
          </div>
          <button onClick={() => setOpen(!open)} className='block-btn'></button>
        </div>
      </>
    );
  }

  if(type === 4) {
    return (
      <>
        <div style={{backgroundColor: color, animationDelay: delay + 'ms'}} className={`block ${left ? 'block-left' : ''}`}>
          <p className='title'>{header}</p>
          <h2 className='text'>{text}</h2>
        </div>
      </>
    );
  }
};

export default Block;
