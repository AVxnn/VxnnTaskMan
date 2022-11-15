import React, {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../firebase/Firebase"

export const AuthContext = createContext<any>({})

const AuthProvider = ({children}: any) : JSX.Element => {
  const [user, setUser] = useState() as any
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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