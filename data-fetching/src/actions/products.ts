"use server";

import { addProduct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  _prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, Number(price), description);

  redirect("/products-db");
};

export const editProduct = async (
  id: number,
  _prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, Number(price), description);

  redirect("/products-db");
};

export const removeProduct = async (id: number) => {
  await deleteProduct(id);

  revalidatePath("/products-db");
};
