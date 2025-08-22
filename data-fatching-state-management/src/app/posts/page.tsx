'use client'
// data fetching in client component 
import { useEffect, useState } from "react";

function page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=47"
      );
      const data = await response.json();
    //   console.log(data);
    setPosts(data);
    }

    fetchPost();
  }, []);
  return (
    <>
    <h1>POSTS</h1>
      <div className="posts-container">
        {posts.map(({key,title,body})=>(
            <div className="post-card" key={key}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        ))}
      </div>
    </>
  );
}

export default page;
