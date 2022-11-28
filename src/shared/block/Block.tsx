import React, {useEffect, useState} from 'react';
import './block.sass'
import Moment from "react-moment";
import {useSelector} from "react-redux";

const Block = ({blocker, type, color, header, left, text, custom, delay, setOpen, open}) : any => {

  const value = useSelector((state: any) => state.user.data)

  const [timeS, setTimeS] = useState(value.workedTime) as any
  const [timeL, setTimeL] = useState(value.limitDay / 5 * 60 * 60 * 1000) as any
  const [interval, setInterval] = useState() as any
  const [worked, setWorked] = useState(value.worked) as any

  useEffect(() => {
      let data = Date.now()
      setTimeS(value.workedTime)
      setTimeL((data - value.limitDay / 5 * 60 * 60 * 1000) - (value.workedTime - data))
      setInterval(value.limitDay / 5)
      setWorked(value.worked)
  }, [value]);

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
            worked ? (
              <h2 className='text'><Moment date={timeL} format="h:mm" durationFromNow></Moment></h2>
            ) : (
              <h2 className='text'>{interval}:00</h2>
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
