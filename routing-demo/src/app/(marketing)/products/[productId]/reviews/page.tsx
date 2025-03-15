import Link from "next/link";

type Props = {
  params: Promise<{ productId: string }>;
};

export default async function Reviews({ params }: Readonly<Props>) {
  const { productId } = await params;

  return (
    <div>
      <h1>Reviews</h1>
      <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
      <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
      <Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
    </div>
  );
}
