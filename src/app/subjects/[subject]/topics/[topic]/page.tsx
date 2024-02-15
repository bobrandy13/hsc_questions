import { api } from "~/trpc/server";
import Question_collapsible from "~/components/question_collapsible";

async function Topic({ params }: { params: { topic: string, subject: string } }) {
  const questions = await api.topics.fetch_questions.query({ subject: params.subject, topic: params.topic });

  console.log(questions);

  if (questions.questions.length === 0)
    return <div className="p-4 text-3xl font-bold">no questions found under {params.subject}/{params.topic}</div>

  return (
    <div>
      {questions.questions.map((question, key: number) => {
        return (
          <div key={key}>
            <Question_collapsible question={question} key={key} />
          </div>
        );
      })}
    </div>
  );
}

export default Topic;
