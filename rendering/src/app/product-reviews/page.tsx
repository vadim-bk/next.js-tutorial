import { Product } from "@/components/Product";
import { Reviews } from "@/components/Reviews";
import { Suspense } from "react";

export default function ProductReviewsPage() {
  return (
    <div>
      <h2>Product reviews page</h2>

      <Suspense fallback={<div>Loading product...</div>}>
        <Product />
      </Suspense>

      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
