import { api } from "~/trpc/server";
import Question_collapsible from "~/components/question_collapsible";
import { ReadonlyURLSearchParams } from "next/navigation";
import Link from "next/link";
import PaginationControls from "~/components/Pagination";
import RandomQuestionButton from "~/components/randomQuestionButton";

export default async function Topic({
  params,
  searchParams,
}: {
  params: { topic: string; subject: string };
  searchParams: { page: number; per_page: number };
}) {
  const questions = await api.topics.fetch_questions.query({
    subject: params.subject,
    topic: params.topic,
  });


  const per_pg =
    searchParams.per_page !== undefined ? Number(searchParams.per_page) : 20;
  const page = searchParams.page !== undefined ? searchParams.page - 1 : 0;
  const start_index = page * per_pg;
  const end_index = start_index + per_pg;
  const page_slice = [start_index, end_index];

  return (
    <div>
      <RandomQuestionButton content_level={params.subject} topic={params.topic} />
      <div>
        {questions.questions
          .slice(page_slice[0], Number(page_slice[1]))
          .map((question, key: number) => {
            return (
              <div key={key}>
                <Question_collapsible question={question} key={key} />
              </div>
            );
          })}

        <div className="flex w-full justify-center p-3">
          <PaginationControls
            subject_name={params.subject}
            topic_name={params.topic}
            total_items={questions.questions.length}
            hasPrev={start_index - per_pg >= 0}
            hasNext={end_index + per_pg < questions.questions.length + per_pg}
          />
        </div>
      </div>
    </div>
  );
}
