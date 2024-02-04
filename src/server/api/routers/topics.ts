import { z } from "zod";
import prisma from "~/lib/prisma";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicsRouter = createTRPCRouter({
  hello: publicProcedure.query(async () => {
    const questions = await prisma.question.findMany({
      where: {
        topic: "vectors",
      },
    });
    return {
      questions,
    };
  }),
});
