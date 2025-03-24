"use client";

import { FormState, editProduct } from "@/actions/products";
import { ErrorMessage } from "@/components/ErrorMessage";
import { SubmitButton } from "@/components/SubmitButton";
import { Product } from "@/types/Product";
import { useActionState } from "react";

type Props = {
  product: Product;
};

export const EditProductForm = ({ product }: Props) => {
  const initialState: FormState = { errors: {} };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction] = useActionState(editProductWithId, initialState);

  return (
    <form className="p-4 space-y-4 max-w-96 bg-white" action={formAction}>
      <h2 className="text-black">Edit product</h2>

      <div>
        <label className="text-black">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={product.title}
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
            defaultValue={product.price}
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
            defaultValue={product.description ?? ""}
          />
        </label>

        <ErrorMessage message={state.errors.description} />
      </div>

      <SubmitButton />
    </form>
  );
};
