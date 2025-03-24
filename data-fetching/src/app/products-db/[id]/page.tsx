import { Product } from "@/types/Product";
import { EditProductForm } from "./ProductEditForm";
import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  const product: Product | null = await getProduct(Number(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
