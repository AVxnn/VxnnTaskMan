import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Authorization from "./pages/authorization/Authorization";
import PrivateRoute from "./entities/privateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import Achievements from "./pages/Achievements/Achievements";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="auth" element={
            <PrivateRoute>
              <Authorization />
            </PrivateRoute>
          } />
          <Route path="/" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
            } />
          <Route path="/achievements" element={
            <PrivateRoute>
              <Achievements />
            </PrivateRoute>
            } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
