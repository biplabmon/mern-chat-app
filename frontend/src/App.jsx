import React from "react";
import "./App.css";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className=" p-4 flex items-center justify-center h-screen">
      {/* <SignUp /> */}
      {/* <LogIn/> */}
      <Home />
    </div>
  );
}

export default App;
