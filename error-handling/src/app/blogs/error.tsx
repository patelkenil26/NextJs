"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  //   console.dir(error);
  //   console.log(error.digest);
  //   console.log(error.message);
  return (
    <div>
      <p>Something went wrong</p>
      {/* <p>Try to reload this page </p> */}
      {/* <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Try Again
      </button> */}
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(), reset();
          });
        }}
      >
        Try Again
      </button>
    </div>
  );
}
