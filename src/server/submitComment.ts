"use server";
import prisma from "~/lib/prisma";
export default async function submitComment({
  id,
  comment,
  author,
  createdAt,
}: {
  id: string;
  comment: string;
  author: string;
  createdAt: string;
}) {
  console.log("hello world");

  try {
    const newComment = prisma.comment.create({
      data: {
        createdAt: createdAt,
        content: comment,
        updatedAt: createdAt,
        author: author,
        questionId: id,
      },
    });
    return newComment;
  } catch {
    return { error: "There was an error submitting your comment" };
  }
}
