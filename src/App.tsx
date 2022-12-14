import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Authorization from "./pages/authorization/Authorization";
import PrivateRoute from "./entities/privateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="auth" element={<Authorization />} />
          <Route path="/" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
            } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
