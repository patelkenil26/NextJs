import Image from "next/image";
import "./home.css";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div>

        <img
          className="w-[360px]"
          src="/ocean-mountain.jpg"
          alt=""
        />
        <Image
          src="/ocean-mountain.jpg"
          width={360}
          height={270}
          alt="ocean-mountain"
          quality={55}
          // unoptimized
        />
        {/* <h1 className="title">Home Page</h1> */}
        <h1 className={styles.title}>Home Page</h1>
        <p>Welcome to our website!</p>
        <h4 className="bg-purple-300">Welcome to our State</h4>
      </div>
    </>
  );
};

export default Home;
