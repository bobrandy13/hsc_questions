import prisma from "~/lib/prisma";
import { z } from "zod";
import {
  extension_1_maths_topics,
  maths_advanced_topics,
} from "~/server/topics";
import { extension_2_maths_topics } from "~/server/topics";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const listTopicsRouter = createTRPCRouter({
  getMain: publicProcedure
    .input(z.object({ subject: z.string() }))

    .query(async ({ input }) => {
      switch (input.subject) {
        case "4U":
          return {
            topics: extension_2_maths_topics,
          };
        case "3U":
          return {
            topics: extension_1_maths_topics,
          };
        case "2U":
          return {
            topics: maths_advanced_topics,
          };
        default:
          return {
            error: "Invalid subject",
          };
      }
    }),
});
