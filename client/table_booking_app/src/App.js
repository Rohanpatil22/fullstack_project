import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { UserContext,PopupContext} from "./components/Context.js";



function App() {

  const [userData,setUserData]=useState({userName:"",userId:""});
  const [popup,setpopup]=useState(false);
  return (
    <>
    <div className="sm:overflow-hidden">
      <UserContext.Provider value={{userData,setUserData}}>
      <PopupContext.Provider value={{popup,setpopup}}>
      <Header/>
      <Outlet/>
      <Footer/>
      </PopupContext.Provider>
      </UserContext.Provider>
    </div>
    </>
  );
}

export default App;
