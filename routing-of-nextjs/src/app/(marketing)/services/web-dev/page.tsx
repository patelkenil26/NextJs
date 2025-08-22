import Link from "next/link";
import React from "react";


function page() {
  return (
    <>
      <h3>Web Dev page</h3>
      <p>
        <Link href={"/services"}>back</Link>
      </p>
    </>
  );
}

export default page;
