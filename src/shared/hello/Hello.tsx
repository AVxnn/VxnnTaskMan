import React from 'react';
import './hello.sass'
import {useSelector} from "react-redux";

const Hello = ({text}) => {

  const value = useSelector((state: any) => state.user.data)

  return text ? (
    <>
      <div className='hello'>
        <h2 style={{display: value.name ? 'block' : 'none'}} className='hello-title'>{text}</h2>
      </div>
    </>
  ) : (
    <>
      <div className='hello'>
        <span className='hello-subtitle'>Welcome back</span>
        <h2 style={{display: value.name ? 'block' : 'none'}} className='hello-title'>{value.name ? value.name : <div className='hello-title'></div>}</h2>
      </div>
    </>
  )
};

export default Hello;
