import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu, Da Nang",
      house: "Building",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: "USA",
        city: {
          street: "100, Nicolas, NY",
          house: "Building",
        },
      });
    }, 3000);
  });
};
export default function User() {
  const [firstName, setFirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const [, forceRerender] = useState(0);
  const [address, setAddress] = useState(initialAddress);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  const rerender = () => {
    forceRerender((prevState) => prevState + 1);
  };

  //Giống componentDidUpdate, effect chạy khi bị rerender
  //   useEffect(() => {
  //     console.log("componentDidUpdate");
  //   });

  //Giống componentDidMount, thường dùng để gọi APi
  useEffect(() => {
    // console.log('useEffect giống componentDidMount')
    // console.log(profile)
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    // cleanup function
    return () => {
      console.log("Huy goi API");
    };
  }, []);
  return (
    <div>
      User Functional Component
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={rerender}>Rerender Age</button>
    </div>
  );
}
