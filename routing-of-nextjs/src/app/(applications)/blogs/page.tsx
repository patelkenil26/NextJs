import Link from 'next/link'
import React from 'react'


export const metadata={
  title:"Blogs"
}

function page() {
  return (
    <>
    <h2>Blogs page</h2>
    <p><Link href={"/"}>Home</Link></p>
    <h5>Blog 1</h5>
    <h5>Blog 2</h5>
    <h5>Blog 3</h5>
    <h5>Blog 4</h5>
    <h5>Blog 5</h5>
    </>
  )
}

export default page