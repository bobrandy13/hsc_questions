"use client";
import Image from "next/image";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { likeQuestion, dislikeQuestion } from "~/server/userEngagement";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function Question_collapsible({
  question,
}: {
  question: {
    id: string;
    title: string;
    topic: string;
    question_url: string;
    answer_url: string;
  };
}) {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{question.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{question.topic}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <div className="relative flex w-full justify-center p-4 md:w-3/4">
            <Link
              href={`/question/${question.id}`}
              className="flex w-screen justify-center"
            >
              <div className="w-3/4">
                <Image
                  src={question.question_url}
                  width={0}
                  height={0}
                  alt="question_url"
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Link>
          </div>
          <Collapsible className="w-full md:w-3/4">
            <CollapsibleTrigger className="flex w-full justify-center p-2">
              <div className="flex h-12 w-48 items-center justify-center rounded-xl bg-black text-white hover:bg-slate-900 dark:bg-white dark:text-black">
                Reveal answer
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="relative w-full p-4">
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
          <div className="float-right flex">
            <button onClick={() => likeQuestion(question.id)}>
              <ThumbsUp className="m-2 hover:bg-gray-100" size={32} />
            </button>
            <button onClick={() => dislikeQuestion(question.id)}>
              <ThumbsDown className="m-2 hover:bg-gray-100" size={32} />
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Question_collapsible;
