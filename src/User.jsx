import React from "react";
import { useState } from "react";

export default function User() {
  const [firstName, setFirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const [, forceRerender] = useState(0);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  const rerender = () => {
    forceRerender((prevState) => prevState + 1);
  };
  return (
    <div>
      User Functional Component
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={rerender}>Rerender Age</button>
    </div>
  );
}
