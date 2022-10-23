import React from 'react';
import './button.sass'

const Button = ({text, click}: any) => {
  return (
    <>
      <button onClick={(e) => click(e)} className='button'>{text}</button>
    </>
  );
};

export default Button;
