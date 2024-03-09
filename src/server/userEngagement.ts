"use server";
import prisma from "~/lib/prisma";

async function likeQuestion(question_id: string) {
  console.log("liked", question_id);

  const likes = await prisma.question.findUnique({
    where: {
      id: question_id,
    },
  });

  if (!likes) return false;

  return await prisma.question.update({
    where: {
      id: question_id,
    },
    data: {
      likes: likes.likes + 1,
    },
  });
}

async function dislikeQuestion(question_id: string) {
  console.log("liked", question_id);

  const likes = await prisma.question.findUnique({
    where: {
      id: question_id,
    },
  });

  if (!likes) return false;

  return await prisma.question.update({
    where: {
      id: question_id,
    },
    data: {
      dislikes: likes.dislikes + 1,
    },
  });
  return false;
}

export { likeQuestion, dislikeQuestion };
