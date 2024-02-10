import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import normaliseURL from "~/server/normaliseURL";
import { api } from "~/trpc/server";

export default async function Page({
  params,
}: {
  params: { subject: string };
}) {
  const data = await api.listTopics.getMain.query({ subject: params.subject });

  console.log("data", data);

  if (!data.topics) return <div>loading</div>;

  // this should call trpc on the subjects that then fetches the respective api that fetches the exam questions from the database;
  return (
    <div className="p-4">
      <h1>Sort questions by topic</h1>

      {data.topics.map((topic, key) => (
        <div key={key}>
          <Button className="m-2 p-2 text-xl">
            <Link
              href={normaliseURL(
                `/subjects/${params.subject}/topics/${topic.toLowerCase()}`,
              )}
            >
              <h1>{topic}</h1>
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
