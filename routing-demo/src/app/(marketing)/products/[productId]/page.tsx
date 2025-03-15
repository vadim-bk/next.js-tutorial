import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Readonly<Props>): Promise<Metadata> => {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
};

export default async function ProductPage({ params }: Readonly<Props>) {
  const { productId } = await params;

  return <h1>Product {productId}</h1>;
}
