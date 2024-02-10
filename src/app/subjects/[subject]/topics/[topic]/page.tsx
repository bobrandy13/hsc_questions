import { api } from "~/trpc/server";
import Question_collapsible from "~/components/question_collapsible";

async function Topic({ params }: { params: { topic: string } }) {
  const questions = await api.topics.hello.query({ topic: params.topic });

  console.log(questions);

  if (questions.questions.length === 0)
    return <div className="p-4 text-5xl font-bold">no questions found...</div>;

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
