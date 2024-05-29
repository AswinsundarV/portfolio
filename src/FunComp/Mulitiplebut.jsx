import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { BsFillHeartbreakFill } from "react-icons/bs";

function Mulitiplebut() {
    const [ishide,setishide] = useState(true)

  const hendleclick =() => {
    setishide(!ishide);
    console.log(aswin);
  }

  return (
    <div>
      {ishide ? <FaHeart /> : <BsFillHeartbreakFill />}
      <button onClick={hendleclick}>Add</button>
    </div>
  );
}
export default Mulitiplebut;


