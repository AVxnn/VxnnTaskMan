import React, {useState} from 'react';
import './authForm.sass'
import Alert from "../../shared/alert/alert";
import Form from "../../shared/form/Form";
import user from "../../images/user.png";
import lock from "../../images/lock.png";
import CheckBox from "../../shared/checkbox/checkbox";
import Button from "../../shared/button/Button";
import ForgotPassword from "../../shared/forgotPassword/ForgotPassword";

import { getAuth, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {updateDoc, doc, getFirestore, Timestamp, getDoc} from "firebase/firestore";
import {db} from "../../entities/firebase/Firebase";
import {useNavigate} from "react-router-dom";

const AuthForm = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const auth = getAuth()
  console.log(auth)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword (auth, data.email, data.password)
      .then( async (userCredential) => {
        const user = userCredential.user;
        await updateDoc(doc(db, "users", user.uid), {
          isOnline: true,
        });
      })
      .catch((error) => {
        console.log(error.code, error.message)
        setData({
          ...data,
          password: '',
          email: '',
        })
      });
    console.log('login', auth.currentUser)
    navigate(`/`)
  }

  const setHandler = (item, type) => {
    setData({
      ...data,
      [type]: item
    })
    console.log(data)
  }

  return (
    <>
      <section className='authForm'>
        <h2 className='authForm-title'>Sign In</h2>
        <section className='authForm-container'>
          <Alert maxWidth={'263'} text={`You can get authorization data from the admin.`}/>
        </section>
        <form className="authForm-form" action="">
          <Form image={user} placeHolder={'Email'} path={'email'} type={'email'} setData={setHandler} data={data}/>
          <Form image={lock} placeHolder={'Password'} path={'password'} type={'password'} setData={setHandler} data={data}/>
          <CheckBox path={'remember'} type={'checkbox'} text={'Remember me'} setData={setHandler} data={data}/>
          <Button click={login} text={'Authorization'}/>
          <ForgotPassword text={'Forgot Password?'} link={'/'}/>
        </form>
      </section>
    </>
  );
};

export default AuthForm;