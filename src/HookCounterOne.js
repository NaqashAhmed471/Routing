import React, { useState } from "react";
import "./Hook.css";

function HookCounterOne() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [userArray, setUserArray] = useState([]);

  const addUser = (e) => {
    if (name !== "") {
      e.preventDefault();
      setUserArray((oldItems) => {
        return [...oldItems, name];
      });
      setName("");
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={(e) => addUser(e)}>
          +
        </button>
      </div>
      <div className="list">
        <h1>List</h1>
        <ul>
          {userArray.map((value, index) => {
            if (index % 2 === 0) {
              return (
                <li key={index} style={{ backgroundColor: "lightblue" }}>
                  {value}
                </li>
              );
            } else {
              return (
                <li key={index} style={{ backgroundColor: "lightgreen" }}>
                  {value}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="count">Count : {count}</div>
    </div>
  );
}

export default HookCounterOne;
