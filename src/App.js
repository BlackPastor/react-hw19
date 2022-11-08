import React from "react";
import {HashRouter, Routes, Route } from 'react-router-dom'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </HashRouter>
    </>
  );
};

export default App;