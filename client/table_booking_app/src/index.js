import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Table from './components/Table';



const route=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="booktable" element={<Table/>}/>

  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <RouterProvider router={route}/>
 
);

reportWebVitals();
