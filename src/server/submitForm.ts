"use server";

import prisma from "~/lib/prisma";

export default async function submitForm(values: {
  title: string;
  topic: string;
  question_url: string;
  answer_url: string;
}) {
  return prisma.question.create({
    data: {
      title: values.title,
      topic: values.topic,
      question_url: values.question_url,
      answer_url: values.answer_url,
    },
  });
}
