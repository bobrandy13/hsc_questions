import prisma from "~/lib/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { z } from "zod";
export const commentRouter = createTRPCRouter({
  createComment: publicProcedure
    .input(
      z.object({
        id: z.string(),
        comment: z.string(),
        author: z.string(),
        createdAt: z.string(),
      }),
    )

    .query(async ({ input }) => {
      const comment = prisma.comment.create({
        data: {
          createdAt: input.createdAt,
          content: input.comment,
          author: input.author,
          questionId: input.id,
          updatedAt: input.createdAt,
        },
      });
      return comment;
    }),
  fetchComments: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const comments = prisma.comment.findMany({
        where: {
          questionId: input.id,
        },
      });
      return comments;
    }),
});
