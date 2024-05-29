import React from 'react'
import Figma from './FunComp/Figma'
import ReactDOM from "react-dom";
import Shopping from './FunComp/Shopping';
import Mulitiplebut from './FunComp/Mulitiplebut';
import Form from './FunComp/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grocery from './Component/Grocerylist/Grocery';

import Aboutme from "./Component/Portfolio/Aboutme.jsx";
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import Getintouch from './Component/Portfolio/Getintouch.jsx';
import Mytech from './Component/Portfolio/Mytech.jsx';
import Card from './Component/Portfolio/Card.jsx';
import Skill from './Component/Portfolio/Skill.jsx';
import Wecrunch from './FunComp/Wecrunch/Wecrunch.jsx';
import Burger from './FunComp/Wecrunch/Burger.jsx';


import { BrowserRouter,Route,Routes } from 'react-router-dom';


 export default function App() {
  return (
    <div>
     
     {/* <Grocery/> */}
      {/* <Figma/> */}
      {/* <Mulitiplebut/> */}
      {/* <Shopping/> */}
      {/* <Form/> */}
      
      <Portfolio/>
      <Aboutme/> 
      <Mytech/>
  <Skill/>
  
      <Card/> 
      <Getintouch/>



{/* <Wecrunch/>    
<Burger/> */}
   

  
    </div>   

  )
}
