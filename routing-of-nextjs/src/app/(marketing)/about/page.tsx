import Link from "next/link";
import React from "react";

export const metadata = {
  title : "About"
}

function page() {
  return (
    <>
      <h2>About page</h2>
      <p>
        <Link href={"/"}>Home</Link>
      </p>
    </>
  );
}

export default page;
