import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { topicsRouter } from "./routers/topics";
import { Question } from "./routers/createQuestion";
import { listTopicsRouter } from "./routers/listTopicRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,

  listTopics: listTopicsRouter,

  topics: topicsRouter,

  post_question: Question,
});

// export type definition of API
export type AppRouter = typeof appRouter;
