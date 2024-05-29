import React from "react";
import "../FunComp/design.css"
import {  FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { AiFillApple } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import iphone from "./images/iphone.jpg"
import joystick from "./images/joystick.jpg"
import keyboard from "./images/keyboard.png"
import pc from "./images/pc.png"
import chair from"./images/chair.png"
import { Dropdown } from "bootstrap";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";






export default function Figma() {

 return (
  <div>
        <div className="top">
          <div></div>
          <div>
   <p>Summer Sale for All Swim Suits And Free Express Delivery-OFF 50% <a href="#" className="btn">ShopNow</a>
      </p>
      </div>
      <div className="drop">
        English
        </div>
        </div>
       
      {/* header/ */ }
      <div className="header">
        <div className="">
          <h4>Exclusive</h4>
       </div>
       
        
       <div className="nav-items">
         <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">Contact</a></li>
  <li><a href="#contact">About</a></li>
  <li><a href="#about">Sign up</a></li>
</ul>
       </div>
       
          <div className="search-icon">
            <p className="look" >
           What are you looking for ?
           </p>
         <CiSearch className="icon" />
         <IoMdHeartEmpty className="icon" />
        <IoCartOutline  className='icon'/>
             
          </div>
      
        {/* <hr /> */}
      </div>
      {/* // sidebar */}   
       <div>
      {/* Sidebar */}
      <div className="sidebar">
           <a href="#" className="button">Women's Fashion</a>
           <a href="#" className="button">Mens's Fashion</a>
           <a href="#" className="button">Electroenics</a>
           <a href="#" className="button">Home & Lifestyle</a>
           <a href="#" className="button">Medicine</a>
           <a href="#" className="button"> Link3Sports & Outdoor</a>
           <a href="#" className="button">Baby's & Toys</a>
           <a href="#" className="button">Groceries & Pets</a>
           <a href="#" className="button">Health & Beauty</a>
      </div>
      {/* Page Content */}
      <div className="content">
         <div className="iphone-content">
           
           <div>
             <div className="logo-container">
             <AiFillApple className="iphonelogo" />
              <p>
             iphone 14series
               </p>
               </div>
        <h1>Up to 10%</h1>
        <h1>off Vocher</h1>
        <h5><a href="#">Shop now <FaArrowRight /></a></h5></div>
        
         <div className="col-7">
        < img src={iphone} alt="i-image" width={470} height={320} />
           </div>
           
 </div>
      {/* /iphone image */}
     
      </div>
    
{/* //phone */}

{/* card */}
    
      <br /><br />
      <div className="flash-container">
        <div className="flash-header">
          <div className=" flashred"></div>
          <h6 className="text-danger px-3">Today's</h6>
        </div>
      
         <div className="flashsale">
           <h1>Flash Sales  </h1>
           <div className="time">
  <div className="timing">
           
               <p >Days</p>
               <h4 >03:</h4>
               
             </div>
             <div className="timing">
             <p > Hours </p>
              <h4 >23:</h4>
             </div>
             <div className="timing">
               <p > Minutes </p>
               <h4 >19:</h4>
             </div>
             <div className="timing">
               <p >  Seconds</p>
               <h4 >56:</h4></div>
    
           </div>
           <div>
           <FaArrowLeftLong className="icon" />
             <FaArrowRightLong className="icon"/>
           </div>
             
       
    
         </div>
      </div>

{/* ecard */}
<div className="ecard-container">
<div className="row p-3">
  {/* 1 */}
  <div className="col-3">

    <div className="card castyle">
      <img src={joystick} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">HAVIT HV-G92 GAMEPAD</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
    </div>
  </div>
</div>

<div className="row p-3">
  {/* 2 */}
  <div className="col-3">
<div className="card castyle">
      <img src={keyboard} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">AK-900 Wired Edition Keyboard</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
        </div>
  </div>
</div>
<div className="row p-3">
  {/* 2 */}
  <div className="col-3">
<div className="card castyle">
    <img src={pc} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">IPS LCD Gaming Monitor</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
        </div>
  </div>
</div>
<div className="row p-3">
  {/* 2 */}
 <div className="col-3">
<div className="card castyle">
      <img src={chair} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">S-Series comfort smoothy chair</h5>
        <p className="card-text text-danger">$120</p>
     <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
       </div>
  </div>
</div>
</div>
<div className="butt-container">
  <button className="butt">View All Products</button>
</div>


      <div className="flash-container">
        <div className="flash-header">
          <div className=" flashred"></div>
          <h6 className="text-danger px-3">Categories</h6>
        </div>
      
         <div className="flashsale">
           <h1>Browse By Category </h1>
      
           <div > 
             <FaArrowLeftLong className="icon"/>
             <FaArrowRightLong className="icon"/>
           </div>
         </div>
              </div>
           <div className="browse">
           <div className="browse-item">
             <CiMobile4 className="browse-icon"/>
             <p>mobile</p>
           </div>
           <div className="browse-item">
             
             <HiOutlineDesktopComputer className="browse-icon"/>
            
<p>computer</p>
           </div>
           <div className="browse-item">
           <BsSmartwatch className="browse-icon" />
          
             <p>smartwatch</p>
           </div>
           <div className="browse-item">
           <CiCamera className="browse-icon" />
          <p>camera</p>
        
           </div>
           <div className="browse-item">
           <CiHeadphones className="browse-icon" />
           <p>Headphone</p>
           </div>
           <div className="browse-item">
           <TbDeviceGamepad className="browse-icon" />  
           <p>Gamepad</p>
             </div>
       </div>
         <div className="flash-container">
        <div className="flash-header">
          <div className=" flashred"></div>
          <h6 className="text-danger px-3">This Month</h6>
         </div>
          </div>
       
       <div className="best">
         <div>
         <h1>Best Seelling Products </h1>
       </div>
           <div className="">
 <button className="butt-time">View All</button>
           </div>
         </div>

     
<div className="ecard-container">
<div className="row p-3">
  {/* 1 */}
  <div className="col-3">

    <div className="card castyle">
      <img src={joystick} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">HAVIT HV-G92 GAMEPAD</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
    </div>
  </div>
</div>

<div className="row p-3">
  {/* 2 */}
  <div className="col-3">
<div className="card castyle">
      <img src={keyboard} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">AK-900 Wired Edition Keyboard</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
        </div>
  </div>
</div>
<div className="row p-3">
  {/* 2 */}
  <div className="col-3">
<div className="card castyle">
    <img src={pc} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">IPS LCD Gaming Monitor</h5>
        <p className="card-text text-danger">$120</p>
        <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
        </div>
  </div>
</div>
<div className="row p-3">
  {/* 2 */}
 <div className="col-3">
<div className="card castyle">
      <img src={chair} alt="card-img-top" width={300} height={250}/>
      <div className="card-body">
        <h5 className="card-title">S-Series comfort smoothy chair</h5>
        <p className="card-text text-danger">$120</p>
     <FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/><FaStar className="text-warning"/></div>
       </div>
  </div>
</div>
</div>
       <div className="jbl-container">
         <div className="jblhead">
           <h3>Categories </h3>
           <h1>Enhance Your Music Experience</h1>
              <div>
             <ul>
               <li>
                 <p>23</p>
                 <p>hours</p>
               </li>
               <li><p>05</p>
                 <p>days</p>
               </li>
               <li>
                 <p>59</p>
                 <p>Minutes</p>
               </li>
               <li>
                 <p>35</p>
                 <p>Seconds</p>
               </li>
             </ul>
           </div>
           <div >
             <button className="jblbut">Buy Now</button>
           </div>
         </div>
        
           <div className="jblimage">
             <img className="jblbg" src="src/FunComp/images/jblback.jpg" alt="" width={800} height={750}/>
             <img className="jblsp"src="src/FunComp/images/jbl.png" alt=""   />
        </div>
        
</div>



    
    


















</div>
  </div>
  );
}