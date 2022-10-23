import React, {useContext} from 'react';
import { AuthContext } from '../authContext/AuthContext'
import { useNavigate } from "react-router-dom";
import Authorization from "../../pages/authorization/Authorization";

const PrivateRoute = ({children}) => {

  const user = useContext(AuthContext)
  const navigate = useNavigate()

  if (user) {
    return children
  } else {
    navigate('/auth')
    return <Authorization />

  }
};

export default PrivateRoute;