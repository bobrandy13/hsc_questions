import Image from "next/image";
import React from "react";
import { api } from "~/trpc/server";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import Comments from "~/components/Comments";

export default async function Question({
  params,
}: {
  params: { question: string };
}) {
  const question = await api.post_question.getQuestion.query({
    id: params.question,
  });

  const comments = await api.commentRouter.fetchComments.query({
    id: params.question,
  });

  if (!question) return <div>loading</div>;
  console.log("question_data", comments);
  return (
    <div className="overflow-x-none flex h-full w-full flex-grow flex-row flex-wrap">
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>{question.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{question.topic}</CardDescription>
          </CardContent>
          <CardFooter className="flex w-full flex-col justify-center">
            <div className="relative flex w-full justify-center p-4 md:w-1/2">
              <Image
                src={question.question_url}
                width={0}
                height={0}
                alt="question_url"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Collapsible className="w-full md:w-1/2">
              <CollapsibleTrigger className="flex w-full justify-center p-2">
                <div className="flex h-12 w-48 items-center justify-center rounded-xl bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black">
                  Reveal answer
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="relative w-3/4 p-4">
                  <Image
                    src={question.answer_url}
                    width={0}
                    height={0}
                    alt="question_url"
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardFooter>
        </Card>
      </div>
      <div className="h-1/2 w-full border">
        <Comments comments={comments} question_id={question.id} />
      </div>
    </div>
  );
}
