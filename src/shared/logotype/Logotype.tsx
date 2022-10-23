import React from 'react';
import logotype from "../../images/logotype.png"
import './logotype.sass'
import {Link} from "react-router-dom";

const Logotype = () => {
  return (
    <>
      <Link
        className='logotype-link'
        to={'/'}>
        <img
          className="logotype"
          src={logotype}
          alt="logotype"/>
      </Link>
    </>
  );
};

export default Logotype;
