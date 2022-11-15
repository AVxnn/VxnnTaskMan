import React from 'react';
import './layout.css'

const Layout = ({children, type}: any) => {

  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;
