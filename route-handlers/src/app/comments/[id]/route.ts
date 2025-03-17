import { comments } from "../data";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export const GET = async (_request: Request, context: Context) => {
  const { id } = await context.params;

  const comment = comments.find((comment) => comment.id === Number(id));

  return Response.json(comment);
};

export const PATCH = async (request: Request, context: Context) => {
  const body = await request.json();

  const { id } = await context.params;

  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  comments[commentIndex].text = body.text;

  return new Response(JSON.stringify(comments[commentIndex]));
};

export const DELETE = async (_request: Request, context: Context) => {
  const { id } = await context.params;

  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  const deletedComment = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return Response.json(deletedComment);
};
