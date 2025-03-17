import Link from "next/link";

export default function Photos() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2>Photos:</h2>

        <Link href="/photos/1">Photo 1</Link>
      </div>

      <Link href="/movies">See movies</Link>
    </div>
  );
}
