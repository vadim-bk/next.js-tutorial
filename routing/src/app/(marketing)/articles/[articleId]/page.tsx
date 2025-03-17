"use client";

import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "sp" }>;
};

export default function ArticlePage({ params, searchParams }: Readonly<Props>) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <>
      <h1>Article Page {articleId}</h1>

      <p>Read in {lang}</p>

      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
    </>
  );
}
