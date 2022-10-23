import React, {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/Firebase"
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase/Firebase'

interface AuthUserProviderProps {
  children?: React.ReactNode
}

export const AuthContext = createContext<AuthUserProviderProps | null >({})

const AuthProvider = ({children}: any) : JSX.Element => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
    setLoading(false)
  }, [])

  if(loading) {
    return null
  }
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider