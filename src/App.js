import React from "react";
import { Routes, Route } from 'react-router-dom'
import SignIn from "./components/SignIn";
import "./App.css";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
    
    </>
  );
};

export default App;