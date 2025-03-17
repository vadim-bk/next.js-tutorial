import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div className="flex flex-col gap-4 mt-10">
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>

        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </>
  );
}
