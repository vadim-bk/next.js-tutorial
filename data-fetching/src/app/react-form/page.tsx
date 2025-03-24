"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const response = await fetch("/react-form/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, price, description }),
        });

        if (response.ok) {
          router.push("/products-db");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [title, price, description, router]
  );

  return (
    <form className="p-4 space-y-4 max-w-96 bg-white" onSubmit={handleSubmit}>
      <h2 className="text-black">Create product</h2>

      <label className="text-black">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="text-black">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <label className="text-black">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="block w-full p-2 mt-4 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
