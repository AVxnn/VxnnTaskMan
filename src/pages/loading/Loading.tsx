import React, {useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Authorization from "../authorization/Authorization";
import {AuthContext} from "../../entities/authContext/AuthContext";

const Loading = () => {

  const user = useContext(AuthContext)
  const navigate = useNavigate()

  if (user) {
    return null
  } else {
    navigate('/auth')
    return <Authorization />
  }

  return (
    <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <section style={{width: '100px', height: '50px', margin: '-50px -50px 0 0'}}>
        <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="100px" y="100px"
             viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
          <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"/>
          </circle>
          <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"/>
          </circle>
          <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"/>
          </circle>
        </svg>
      </section>
    </div>
  );
};

export default Loading;
