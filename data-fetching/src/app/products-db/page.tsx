import { getProducts } from "@/prisma-db";
import { Product } from "@/types/Product";
import { Products } from "./Products";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function ProductsDbPage({ searchParams }: Props) {
  const { query } = await searchParams;

  const products: Product[] = await getProducts(query);

  return <Products products={products} />;
}
