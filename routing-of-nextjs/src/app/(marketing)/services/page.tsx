import Link from 'next/link'
import { title } from 'process'
import React from 'react'

export const metadata = {
  title:"Services"
}

function page() {
  return (
   <>
    <h2>Service Page</h2>
    <p><Link href={'/'}>back</Link></p>
    <p><Link href={"/services/web-dev"}>Web-Dev</Link></p>
    <p><Link href={"/services/seo"}>seo</Link></p>
   </>
  )
}

export default page