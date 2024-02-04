import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
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
          <Button>
            <Link
              href={`/subjects/${params.subject}/topics/${topic.toLowerCase()}`}
            >
              <h1>{topic}</h1>
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
