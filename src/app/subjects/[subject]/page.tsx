import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import normaliseURL from "~/server/normaliseURL";
import RandomQuestionButton from "~/components/randomQuestionButton";

import { api } from "~/trpc/server";

export default async function Page({
  params,
}: {
  params: { subject: string };
}) {
  const topics = await api.listTopics.getMain.query({ subject: params.subject });

  if (!topics.topics) return <div>loading</div>;

  // this should call trpc on the subjects that then fetches the respective api that fetches the exam questions from the database;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sort questions by topic</h1>

      <RandomQuestionButton content_level={params.subject} />


      <div className="min-w-md m-4 flex flex-grow flex-wrap items-center justify-between rounded">
        {topics.topics.map((topic, key) => (
          <Link
            href={normaliseURL(
              `/subjects/${params.subject}/topics/${topic.toLowerCase()}`,
            )}
            key={key}
            className="m-4 h-24 w-full rounded bg-foreground p-3 text-white hover:bg-gray-900 dark:bg-gray-200"
          >
            <div className="">
              <div className="">
                <h1 className="cursor-pointer text-white hover:underline dark:text-black">
                  {topic}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div >
  );
}
