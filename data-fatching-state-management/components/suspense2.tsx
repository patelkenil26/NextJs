import React from "react";

async function Suspense2() {
  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data = await slowResponse.json();
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}

export default Suspense2;
