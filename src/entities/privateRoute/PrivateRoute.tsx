import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../authContext/AuthContext'
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/loading/Loading";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../firebase/Firebase";
import {useDispatch} from "react-redux";
import {setData} from "../reducers/userSlice/userSlice";

const PrivateRoute = ({children}) => {

  const dispath = useDispatch()

  const user = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      let unsub = onSnapshot(doc(db, "users", user.uid), (querySnapshot) => {
        const posts = [];
        posts.unshift(querySnapshot.data())
        dispath(setData({...posts[0]}))
      });
      return () => unsub()
    }
  }, [user])

  if (user) {
    return children
  } else {
    return <Loading />
  }
};

export default PrivateRoute;