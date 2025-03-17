import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  return Response.json(filteredComments);
};

export const POST = async (request: Request) => {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-type": "application/json" },
    status: 201,
  });
};
