import React from 'react'
import "../Portfolio/skill.css"
import react from "../Portfolio/portfolioimg/react-logo-1000-transparent_original.png"
import py from"../Portfolio/portfolioimg/python-logo-png-open-2000.png"
import sql from "../Portfolio/portfolioimg/mysql_PNG23.png"
export default function Skill() {
  return (
    <div id='section2'>
      <div className='head'>
       <b>Skills</b>
      </div>



<div class="acontainer">
        <div class="acard">
            <div class="face face1">
                <div class="content">
                <img src={react} alt="" width={200} height={200}/>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h5>FrontEnd</h5>
                    <p>A frontend developer using ReactJS builds dynamic and interactive user interfaces for web applications.ReactJS,a JavaScript library,allows creation of reusable UI components,This developer focuses on building responsive,fast,and scalable user experiences.</p>
                </div>
            </div>
        </div>
        <div class="acard">
            <div class="face face1">
                <div class="content">
                <img src={py}width={200} height={200}/>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                  <h5>Backend</h5>
                    <p>A backend developer using Django a high-level Python framework This developer handles database, server logic,and API integrations, ensuring the application's core functionality and performance</p>
                </div>
            </div>
        </div>
        <div class="acard">
            <div class="face face1">
                <div class="content">
                <img src={sql} alt="" width={200} height={200}/>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                 <h5>DataBase</h5>
                    <p>Using SQL in MySQL involves managing and manipulating relational databases. SQL is used for querying, updating, and organizing data.Together, they ensure efficient data storage, retrieval, and management for applications.</p>
                </div>
            </div>
        </div>
    </div>








    </div>
  )
}
      {/* <div class="wrapper">
  <div class="fcard">
    <img src="src/FunComp/images/react-logo-1000-transparent_original.png" />
    <div class="info">
      <h1>FrontEnd</h1>
      <p>A frontend developer using ReactJS builds dynamic and interactive user interfaces for web applications. ReactJS, a JavaScript library, allows for the creation of reusable UI components, enhancing performance through a virtual DOM. This developer focuses on building responsive, fast, and scalable user experiences.</p>
     
    </div>
  </div>
  <div class="fcard">
    <img src="src/FunComp/images/chair.png"/>
  
    <div class="info">
      <h1>BackEnd</h1>
      <p>A backend developer using Django builds robust and scalable server-side applications. Django, a high-level Python framework, promotes rapid development and clean, pragmatic design. This developer handles database interactions, server logic, and API integrations, ensuring the application's core functionality and performance.</p>
    
    </div>
  </div>
  <div class="fcard"><img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    <div class="info">
      <h1>DataBase</h1>
      <p>Using SQL in MySQL involves managing and manipulating relational databases. SQL (Structured Query Language) is used for querying, updating, and organizing data, while MySQL, a popular open-source RDBMS, provides the platform for executing these operations. Together, they ensure efficient data storage, retrieval, and management for applications.</p>
    
    </div>
  </div>
</div>
 */}