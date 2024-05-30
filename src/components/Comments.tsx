"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import submitComment from "~/server/submitComment";
import { api } from "~/trpc/server";
import IndividualComments from "./IndividualComments";


export default function Comments({
  comments,
  question_id,
}: {
  comments: Array<{
    author: string;
    content: string;
    createdAt: string;
    id: string;
    questionId: string;
    updatedAt: string;
  }>;
  question_id: string;
}) {
  const { isSignedIn, user, isLoaded } = useUser();
  const inputRef = useRef(null);
  const router = useRouter();
  return (
    <div className="relative h-full border bg-gray-50 p-4 ">
      <IndividualComments comments={comments} />
      <div className="flex-end absolute bottom-0 flex w-full pb-4">
        <Input placeholder="COmment. " className="w-1/2" ref={inputRef} />
        <Button
          name="Submit"
          className="ml-4 w-24 max-w-md"
          onClick={() => {
            if (
              inputRef.current &&
              (inputRef.current as HTMLInputElement)?.value?.trim() === ""
            ) {
              alert(
                "please enter a comment before submitting. dont break my backend please",
              );
              return;
            }

            if (!isSignedIn) {
              alert("Please sign in to submit a comment");
              return;
            }

            const inputValue =
              (inputRef.current as unknown as HTMLInputElement)?.value ??
              undefined;

            const current_date = new Date().toISOString();

            router.refresh();
            window.location.reload();

            void submitComment({
              id: question_id,
              comment: inputValue,
              author: user.username ?? "Anonymous",
              createdAt: current_date,
            });

            (inputRef.current as unknown as HTMLInputElement)?.value == "";
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
