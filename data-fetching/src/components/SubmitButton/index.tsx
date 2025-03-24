"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="block w-full p-2 mt-4 text-white bg-blue-500 rounded disabled:bg-gray-500"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
