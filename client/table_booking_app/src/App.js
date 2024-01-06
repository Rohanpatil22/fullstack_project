import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { UserContext } from "./components/Context.js";



function App() {

  const [userData,setUserData]=useState({userName:"",userId:""});
  return (
    <>
    <div>
      <UserContext.Provider value={{userData,setUserData}}>
      <Header/>
      <Outlet/>
      <Footer/>
      </UserContext.Provider>
    </div>
    </>
  );
}

export default App;
