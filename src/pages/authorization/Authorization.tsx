import React, {useContext} from 'react';
import './authorization.sass'
import Logotype from "../../shared/logotype/Logotype";
import time from "../../images/time.png";
import AuthForm from "../../widgets/authForm/authForm";
import {AuthContext} from "../../entities/authContext/AuthContext";

const Authorization = () => {

  const user = useContext(AuthContext)

  return (
    <>
      <div className='container-auth'>
        <div className='bg-left'>
          <section className='bg-left-logotype'>
            <Logotype />
          </section>
          <section className='bg-left-time'>
            <img className='bg-left-time_img' src={time} alt="time"/>
          </section>
        </div>
        <div className='bg-right'>
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default Authorization;