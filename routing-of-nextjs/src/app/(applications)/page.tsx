import Image from "next/image";
import Link from "next/link";
import ComponentPage from "../_components/page";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      {/* private folder  */}
      <ComponentPage/>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        {" "}
        <Link href={"/blogs"}>Blogs</Link>
      </p>
      <p>
        {" "}
        <Link href={"/files"}>files</Link>
      </p>
      <p>
        {" "}
        <Link href={"/services"}>services</Link>
      </p>
    </>
  );
}
