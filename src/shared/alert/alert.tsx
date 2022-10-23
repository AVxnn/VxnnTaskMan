import React from 'react';
import './alert.sass'

const Alert = ({text, maxWidth}: any) => {
  return (
    <>
      <section style={{maxWidth: `${maxWidth}px`}} className="alert">
        <span>{text}</span>
      </section>
    </>
  );
};

export default Alert;
