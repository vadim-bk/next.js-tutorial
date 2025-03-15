"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ReviewError({ error, reset }: Readonly<Props>) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h1>Error in reviewId</h1>

      <p>{error.message}</p>

      <button onClick={reload}>Try again</button>
    </div>
  );
}
