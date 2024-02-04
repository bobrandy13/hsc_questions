import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { topicsRouter } from "./routers/topics";
import { createQuestoin } from "./routers/createQuestion";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,

  userList: publicProcedure.query(async () => {
    console.log("hello");

    return {
      post: "potato",
    };
  }),

  topics: topicsRouter,

  post_question: createQuestoin,
});

// export type definition of API
export type AppRouter = typeof appRouter;
