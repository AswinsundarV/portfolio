import React from 'react'
import "../Portfolio/card.css";
import todo from "../Portfolio/portfolioimg/todolist.png"
import bcard from "../Portfolio/portfolioimg/maxresdefault.jpg"
import figma from "../Portfolio/portfolioimg/figma.jpg"
import blog from "../Portfolio/portfolioimg/blogger.jpg"
import card from "../Portfolio/portfolioimg/shopping.jpg"
export default function Card() {
  return (
    <div id='section3'>
   <div className='container'>
    <div className='row'>
      <div className='project'>
      <h1>Projects</h1></div>
   <div className='col-4'>
   <div className="card" >
  <img className="card-img-top" src={todo} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Todo list</h5>
    <p className="card-text">A todo-list made with HTML, CSS, and React.js provides a user-friendly way to organize tasks.</p>
   
  </div>
</div>
   </div>


   <div className='col-4'>
   <div className="card" >
  <img className="card-img-top" src={figma} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Figma</h5>
    <p className="card-text">Figma is a popular design tool for creating user interfaces. By using HTML, CSS, and Bootstrap, you can translate Figma designs into web pages efficiently</p>
    
  </div>
</div>
   </div>


   <div className='col-4'>
   <div className="card" >
  <img className="card-img-top" src={card} width={200} height={210}/>
  <div className="card-body">
    <h5 className="card-title">Shopping Card</h5>
    <p className="card-text">A shopping cart developed with HTML, CSS, and React.js streamlines online shopping experiences.</p>
   
  </div>
</div>
   </div>
  <br/><br />
  <div className='sec'>
    <div className='row'>
   <div className='col-4'>
   <div className="card" >
  <img className="card-img-top" src={bcard} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Birthday list</h5>
    <p className="card-text">A birthday card built with HTML, CSS, and React.js offers a dynamic and interactive way to send personalized greetings.</p>
   
  </div>
</div>
   </div>




   <div className='col-4'>
   <div className="card" >
  <img className="card-img-top" src={blog} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Blogger</h5>
    <p className="card-text">A blogger website crafted with HTML and CSS features a clean layout with sections like header, main content area for posts, sidebars, and a footer.</p>
    
 
   </div>
   </div> 
   
</div>
   </div>

   </div>
  
 </div> 
   
</div>
   </div>
  

 
  )
}
