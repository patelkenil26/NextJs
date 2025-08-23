"use client";

export default function error({ error, reset }) {
      console.dir(error);

  return (
    <div>
      <p>Something went wrong in this page</p> 
      <button onClick={()=>{
        reset();
      }}>Try Again</button>{" "}
    </div>
  );
}
