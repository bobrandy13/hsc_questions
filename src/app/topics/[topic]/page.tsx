import { api } from "~/trpc/server";
import Question_collapsible from "~/components/question_collapsible";

async function Topic() {
  const questions = await api.topics.hello.query();

  console.log(questions);

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
