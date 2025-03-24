"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
};

export default function ErrorPage({ error }: Props) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-red-500 text-2xl font-bold">
        Error fetching users data
      </div>
    </div>
  );
}
