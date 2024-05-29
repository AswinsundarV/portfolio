import React from 'react'
import "./getintouch.css"

 function Contact() {
  return (
    
    <div className='maincont' id='section5'>
      <div id='fo'>
<div className='con'>
       <div>
        <h1 className='get'> Get in Touch</h1>
       </div>
       <div>
        <h3 className='let'>Let's talk about<br/> everything!</h3>
       </div>
       <div>
        <p className='dont'>Don't like forms? Send me an <span>email</span> .</p>
       </div>


<div className='form'>

<span className='one'>
    <input type="text" className='our' placeholder='Your Name'/></span>

  <span className='two'> <input type="text" className='add' placeholder='E-mail Address'/></span> 


 
  <span className='three'> <input type="text" className="cor"placeholder='Subject'/></span> 

 
   <span className='four'> <input type="text" className='age' placeholder='Message'/></span>
<div className='onx'>
<button>Send Message</button>  </div>

</div>






</div>




</div>

    </div>
  )
}
export default Contact


