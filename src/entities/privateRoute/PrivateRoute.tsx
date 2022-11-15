import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../authContext/AuthContext'
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/loading/Loading";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../firebase/Firebase";
import {useDispatch, useSelector} from "react-redux";
import {setName, setUid, setLimitDay, setWorkedTime} from "../reducers/userSlice/userSlice";

const PrivateRoute = ({children}) => {

  const dispath = useDispatch()
  const value = useSelector((state: any) => state.user)

  const user = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      let unsub = onSnapshot(doc(db, "users", user.uid), (querySnapshot) => {
        const posts = [];
        posts.unshift(querySnapshot.data())
        dispath(setName(posts[0].name))
        dispath(setLimitDay(posts[0].limitDay))
        dispath(setWorkedTime(posts[0].workedTime))
        console.log(posts[0])
        dispath(setUid(posts[0].uid))
        console.log()
      });
      return () => unsub()
    }
  }, [user])

  if (user) {
    return children
  } else {
    navigate('/auth')
    return <Loading />

  }
};

export default PrivateRoute;