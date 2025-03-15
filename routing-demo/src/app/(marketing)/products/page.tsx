import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href="/">Home</Link>

      <h1>Products</h1>

      <Link href="/products/1">Product 1</Link>

      <Link href="/products/2" replace>
        Product 2
      </Link>

      <Link href="/products/3">Product 3</Link>
    </div>
  );
}
