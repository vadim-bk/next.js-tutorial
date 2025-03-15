import { redirect } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export default async function ReviewPage({ params }: Readonly<Props>) {
  const { productId, reviewId } = await params;

  const randomInt = getRandomInt(2);

  if (randomInt === 1) {
    throw new Error("Error loading review");
  }

  if (Number(reviewId) > 100) {
    // notFound();
    redirect("/products");
  }

  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
