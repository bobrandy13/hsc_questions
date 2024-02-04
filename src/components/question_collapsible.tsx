"use client";
import Image from "next/image";
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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{question.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{question.topic}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
        <div className="relative flex w-1/2 justify-center p-4">
          <Image
            src={question.question_url}
            width={0}
            height={0}
            alt="question_url"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full justify-center p-2">
            <div className="flex h-12 w-48 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
              Reveal answer
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="relative p-4">
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
  );
}

export default Question_collapsible;
