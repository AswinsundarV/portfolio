import React from "react";
import { useState } from "react";


function Calcu(){
    const [Count,setCount]=useState(0)
    
    const handleadd9= () =>{
        setCount(Count+9)
    }
    const handleadd8= () =>{
        setCount(Count+8)
    }
    const handleadd7= () =>{
        setCount(Count+7)
    }
    const handleadd6= () =>{
        setCount(Count+6)
    }
    const handleadd5= () =>{
        setCount(Count+5)
    }
    const handleadd4= () =>{
        setCount(Count+4)
    }
    const handleadd3= () =>{
        setCount(Count+3)
    }
    const handleadd2= () =>{
        setCount(Count+2)
    }
    const handleadd1= () =>{
        setCount(Count+1)
    }
    const handleadd0= () =>{
        setCount(Count+0)
    }
    const handleac= () =>{
        setCount("")
   
    }
    return(
    <div className="flex-container">
        <div className="a">
        <h1>{Count}</h1>
        <button onClick={handleadd9}> 9</button>
        <button onClick={handleadd8}> 8 </button>
        <button onClick={handleadd7}> 7 </button>
        <button onClick={""}> DEL </button>
        <button onClick={""}> AC</button>
        <div className="b">
        <button onClick={handleadd6}> 6 </button>
        <button onClick={handleadd5}> 5 </button>
        <button onClick={handleadd4}> 4 </button>
        <button onClick={""}> *</button>
        <button onClick={""}> / </button>
        <div className="c">
        <button onClick={handleadd3}> 3 </button>
        <button onClick={handleadd2}> 2 </button>
        <button onClick={handleadd1}> 1 </button>
        <button onClick={""}> - </button>
        <button onClick={""}> + </button>
        <div className="d">
        <button onClick={handleadd0}> 0 </button>
        <button onClick={""}> Exp</button>
        <button onClick={""}> Ans </button>
        <button onClick={handleac}> AC</button>
        <button onClick={""}>=</button>
       
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Calcu;