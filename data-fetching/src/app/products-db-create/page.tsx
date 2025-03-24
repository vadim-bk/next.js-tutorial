"use client";

import { FormState, createProduct } from "@/actions/products";
import { ErrorMessage } from "@/components/ErrorMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = { errors: {} };

  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form className="p-4 space-y-4 max-w-96 bg-white" action={formAction}>
      <h2 className="text-black">Create product</h2>

      <div>
        <label className="text-black">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
          />
        </label>

        <ErrorMessage message={state.errors.title} />
      </div>

      <div>
        <label className="text-black">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
          />
        </label>

        <ErrorMessage message={state.errors.price} />
      </div>

      <div>
        <label className="text-black">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
          />
        </label>

        <ErrorMessage message={state.errors.description} />
      </div>

      <SubmitButton />
    </form>
  );
}
