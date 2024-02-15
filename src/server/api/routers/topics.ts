import prisma from "~/lib/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicsRouter = createTRPCRouter({
  fetch_questions: publicProcedure
    .input(z.object({ topic: z.string() , subject: z.string()}))

    .query(async ({ input }) => {
      console.log(input);
      const questions = await prisma.question.findMany({
        where: {
            AND: [
                {topic: input.topic},
                {content_level: input.subject}
            ]
        },
      });
      return {
        questions,
      };
    }),
});
