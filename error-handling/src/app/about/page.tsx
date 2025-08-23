"use client";

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>
      <button
        onClick={() => {
          // console.log(kenil)
          setFruits(null);
        }}
      >
        Click me 
      </button>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
};

export default About;
