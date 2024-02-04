import Link from "next/link";
import React from "react";
import { api } from "~/trpc/server";

export default async function Page({
  params,
}: {
  params: { subject: string };
}) {
  const data = await api.userList.query();

  const more_data = await api.topics.hello.query({
    text: "Maths Extension 4 Unit",
  });
  // this should call trpc on the subjects that then fetches the respective api that fetches the exam questions from the database;
  return (
    <div className="p-4">
      <h1>Sort questions by topic</h1>
      <p>{params.subject}</p>
      <p>{data.post}</p>
      <p>{more_data.greeting}</p>
      <Link href="subjects/4U/vectors">Vectors</Link>
    </div>
  );
}
