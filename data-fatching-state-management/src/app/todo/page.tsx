// data fetching in server component with suspense

import { Suspense } from "react";
import Todoc from "../../../components/Todoc";
import Suspense1 from "../../../components/suspense1";
import Suspense2 from "../../../components/suspense2";

export default async function page() {
  return (
    <>
      <h1>TODOS</h1>
      <Suspense fallback={<div className="todos-container">
        {Array.from({ length: 7 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>}>
        <Todoc />
      </Suspense>
      <Suspense fallback={<div>Suspense 1 loading</div>}>
        <Suspense1 />
      </Suspense>
      <Suspense fallback={<div>Suspense 2 loading</div>}>
        <Suspense2 />
      </Suspense>
    </>
  );
}
