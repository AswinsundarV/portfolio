import React, { useState } from "react";
import "../FunComp/form.css";
export default function Form() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [birth, setbirth] = useState("");
  const [mail, setmail] = useState("");
  const [contact, setcontact] = useState("");
  const [isshow, setishow] = useState(!false);

  const handlename = (a) => {
    setname(a.target.value);
  };
  const handleage = (a) => {
    setage(a.target.value);
  };
  const handlebirth = (a) => {
    setbirth(a.target.value);
  };p
  const handlemail = (a) => {
    setmail(a.target.value);
  };
  const handlecontact = (a) => {
    setcontact(a.target.value);
  };

  const handleclick = () => {
    setishow(!true);
  };

  return (
    <div className="main">
      {isshow ? (
        <form className="login">
          <h1>Form</h1>
          <label htmlFor="">Name:</label>
          <input
            onChange={handlename}
            type="text"
            placeholder="Enter your name"
          />
          <br />
          <br />
          <label htmlFor="">Age:</label>
          <input
            onChange={handleage}
            type="number"
            placeholder="Enter your age"
          />
          <br />
          <br />
          <label htmlFor="">Date of birth:</label>
          <input
            onChange={handlebirth}
            type="number"
            placeholder="Enter your Date of birth"
          />
          <br />
          <br />
          <label htmlFor="">Email:</label>
          <input
            onChange={handlemail}
            type="text"
            placeholder="Enter your Email"
          />
          <br />
          <br />
          <label htmlFor="">Contact No:</label>
          <input
            onChange={handlecontact}
            type="number"
            placeholder="Enter your contact no"
          />
          <br />
          <br />
          <button onClick={handleclick}>Submit</button>
        </form>
      ) : (
        <div className="submit">
          <h1>name:{name}</h1>
          <h1>age:{age}</h1>
          <h1>date of:{birth}</h1>
          <h1>email:{mail}</h1>
          <h1>contact:{contact}</h1>
        </div>
      )}
    </div>
  );
}



