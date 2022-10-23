import React from 'react';
import './layout.css'
import Header from "../../widgets/header/Header";
import {useParams} from "react-router-dom";

const Layout = ({children, type}: any) => {

  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;
