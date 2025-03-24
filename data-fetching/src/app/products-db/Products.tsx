"use client";

import { removeProduct } from "@/actions/products";
import { Product } from "@/types/Product";
import Form from "next/form";
import Link from "next/link";
import { useCallback, useOptimistic } from "react";

type Props = {
  products: Product[];
};

export const Products = ({ products }: Props) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) =>
      currentProducts.filter((product) => product.id !== productId)
  );

  const removeProductById = useCallback(
    async (id: number) => {
      setOptimisticProducts(id);
      await removeProduct(id);
    },
    [setOptimisticProducts]
  );

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>

          <Form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
            >
              Remove
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
};
