import prisma from "~/lib/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { QuoteIcon } from "lucide-react";

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

      if (input.topic == "EXT2AT3") {
        const questions = await prisma.question.findMany({
          where: {
            OR: [
              {
                AND: [
                  { topic: "integration" },
                  { content_level: input.subject },
                ],
              },
              {
                AND: [{ topic: "vectors" }, { content_level: input.subject }],
              },
            ],
          },
        });
        return {
          questions,
        };
      } else if (input.topic == "EXT1AT3") {
        const questions = await prisma.question.findMany({
          where: {
            OR: [
              {
                AND: [
                  { topic: "binomial_distribution" },
                  { content_level: input.subject },
                ],
              },
              {
                AND: [
                  { topic: "integration" },
                  { content_level: input.subject },
                ],
              },
            ],
          },
        });
        return {
          questions,
        };
      } else if (input.topic === "ap3") {
        // if the topic is AP3 return questions under trig functions, vectors, 3U proofs, and (motion and rates of change)
        if (input.subject == "4U") {
          const questions = await prisma.question.findMany({
            where: {
              OR: [
                {
                  AND: [{ topic: "complex" }, { content_level: input.subject }],
                },
                {
                  AND: [{ topic: "proofs" }, { content_level: input.subject }],
                },
                {
                  AND: [{ topic: "vectors" }, { content_level: input.subject }],
                },
              ],
            },
          });
          return {
            questions,
          };
        } else if (input.subject == "3U") {
          const questions = await prisma.question.findMany({
            where: {
              OR: [
                {
                  AND: [
                    { topic: "trig_functions" },
                    { content_level: input.subject },
                  ],
                },
                {
                  AND: [{ topic: "vectors" }, { content_level: input.subject }],
                },
                {
                  AND: [
                    { topic: "motion_and_rates" },
                    { content_level: input.subject },
                  ],
                },
                {
                  AND: [{ topic: "proofs" }, { content_level: input.subject }],
                },
              ],
            },
          });
          return {
            questions,
          };
        }
      } else if (input.topic == "calculus") {
        const questions = await prisma.question.findMany({
          where: {
            OR: [
              {
                AND: [
                  { topic: "differential_calculus" },
                  { content_level: input.subject },
                ],
              },
              {
                AND: [
                  { topic: "integration" },
                  { content_level: input.subject },
                ],
              },
            ],
          },
        });

        return { questions }
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

  fetch_sciences: publicProcedure
    .input(z.object({ subject: z.string(), module: z.number() }))
    .query(async ({ input }) => {
      const questions = await prisma.sciQuestion.findMany({
        where: {
          AND: [{ subject: input.subject }, { module: input.module }],
        },
      });
      return questions;
    }),

  random_question: publicProcedure
    .input(z.object({ content_level: z.string(), topic: z.string().nullable() }))
    .query(async ({ input }) => {
      if (input.topic == null) {
        const question = await prisma.question.findFirst({
          where: {
            content_level: input.content_level,
          },
        })

        return { question }
      } else {
        const question = await prisma.question.findFirst({
          where: {
            content_level: input.content_level,
            topic: input.topic
          }
        });
        return { question }
      }


    })


});
