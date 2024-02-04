import prisma from "~/lib/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ topic: z.string() }))

    .query(async ({ input }) => {
      console.log(input);
      const questions = await prisma.question.findMany({
        where: {
          topic: input.topic,
        },
      });
      return {
        questions,
      };
    }),
});
