import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <h1>Blog</h1>;
}
