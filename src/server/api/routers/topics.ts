import prisma from "~/lib/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const topicsRouter = createTRPCRouter({
  fetch_questions: publicProcedure
    .input(z.object({ topic: z.string(), subject: z.string() }))

    .query(async ({ input }) => {
      // if the inpput is not a string, throw an error
      if (
        typeof input.topic !== "string" ||
        typeof input.subject !== "string"
      ) {
        throw new Error("Invalid input");
      }

      // find all questions that match the topic and subject

      // if the topic is AP3 return questions under trig functions, vectors, 3U proofs, and (motion and rates of change)
      if (input.topic === "ap3") {
        if (input.subject == "4U") {

          const questions = await prisma.question.findMany({
            where: {
              OR: [
                { AND: [{ topic: "complex" }, { content_level: input.subject }] },
                { AND: [{ topic: "proofs" }, { content_level: input.subject }] },
                { AND: [{ topic: "vectors" }, { content_level: input.subject }] },
              ],
            },
          });
          return {
            questions,
          };
        }
        else if (input.subject == '3U') {
          const questions = await prisma.question.findMany({
            where: {
              OR: [
                { AND: [{ topic: "trig_functions" }, { content_level: input.subject }] },
                { AND: [{ topic: "vectors" }, { content_level: input.subject }] },
                { AND: [{ topic: "motion_and_rates" }, { content_level: input.subject }] },
                { AND: [{ topic: "proofs" }, { content_level: input.subject }] },
              ],
            },
          });
          return {
            questions,
          };
        }

      }





      // return the normal page questions;
      const questions = await prisma.question.findMany({
        where: {
          AND: [{ topic: input.topic }, { content_level: input.subject }],
        },
      });
      return {
        questions,
      };
    }),
});
