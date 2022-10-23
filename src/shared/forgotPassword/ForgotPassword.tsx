import React from 'react';
import {Link} from "react-router-dom";
import './ForgotPassword.sass'

const ForgotPassword = ({text, link}: any) => {
  return (
    <>
      <section className='container-link'>
        <Link to={link} className='link'>{text}</Link>
      </section>
    </>
  );
};

export default ForgotPassword;
