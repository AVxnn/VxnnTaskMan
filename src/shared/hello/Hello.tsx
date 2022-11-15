import React, {useState} from 'react';
import './hello.sass'
import {useSelector} from "react-redux";

const Hello = () => {

  const data = useSelector((state: any) => state.user)

  return (
    <>
      <div className='hello'>
        <span className='hello-subtitle'>Welcome back</span>
        <h2 style={{display: data.name ? 'block' : 'none'}} className='hello-title'>{data.name ? data.name : <div className='hello-title'></div>}</h2>
      </div>
    </>
  );
};

export default Hello;
