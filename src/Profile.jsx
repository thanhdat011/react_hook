import React from "react";
import { useContext } from "react";
import { UserContext } from "./User";

export default function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  return (
    <div>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
    </div>
  );
}
