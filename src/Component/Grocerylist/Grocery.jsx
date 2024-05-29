import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Grocery() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const uuuid=uuidv4();
  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    let res = await axios.get(" http://localhost:3000/todoList")
    setdata(res.data);
  }
  const handleinput = (e) => {
    setinput(e.target.value);
  };
  const handleadd = async () => {
    let body = {
      task:input,
      id:uuuid
    };
    await axios.post("http://localhost:3000/todoList",body)
    handlefetch();
  };
  return (
    <div>
      <h1 className="ms-5 mt-5">Grocery</h1>

      <input type="text" className="ms-5 mt-5"placeholder="Enter your list" onChange={handleinput}/>
      <button onClick={handleadd} className="ms-5 btn btn-primary">
        add
      </button>

      <ol className="ms-4 mt-3">
        {data.map((da) => (
          <div>
            <li>{da.task}</li>
            <button className="btn btn-warning mt-3 mb-3">update</button>
            <button className="btn btn-danger ms-4 mt-4 mb-3">delete</button>
          </div>
        ))}
      </ol>
    </div>
  );
}
export default Grocery;
