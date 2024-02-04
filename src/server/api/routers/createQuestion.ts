import { z } from "zod";
import prisma from "~/lib/prisma";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const createQuestoin = createTRPCRouter({
  createQuestion: publicProcedure
    .input(
      z.object({
        title: z.string(),
        topic: z.string(),
        question_url: z.string().url(),
        answer_url: z.string().url(),
      }),
    )
    .query(async ({ input }) => {
      const question = await prisma.question.create({
        data: {
          title: input.title,
          topic: input.topic,
          question_url: input.question_url,
          answer_url: input.answer_url,
        },
      });
      return {
        question,
      };
    }),
});
