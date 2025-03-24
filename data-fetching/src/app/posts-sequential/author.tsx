import { apiUrl } from "@/api";

type Author = {
  id: number;
  name: string;
};

type Props = {
  userId: number;
};

export default async function Author({ userId }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`${apiUrl}/users/${userId}`);

  const author: Author = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
        {author.name}
      </span>
    </div>
  );
}
