import Link from "next/link";
import Card from "~/components/Card";
import { Button } from "~/components/ui/button";
import normaliseURL from "~/server/normaliseURL";

const topics = [
  {
    subject_name: "Maths Extension 2",
    subject_code: "4U",
    subject_description: "So fun! 4 unit maths :|",
  },
  {
    subject_name: "Maths Extension 1",
    subject_code: "3U",
    subject_description: "somewhat fun! little boring sometimes",
  },
  {
    subject_name: "Maths Advanced",
    subject_code: "2U",
    subject_description: "boring...",
  },
];
export default function Maths() {
  return (
    <div className="flex h-screen w-screen flex-col flex-wrap md:justify-normal">
      <ul
        className={
          "flex w-full flex-col items-center justify-center gap-4 lg:flex-row"
        }
      >
        {topics.map((topic, key) => (
          <div key={key}>
            <Card
              key={key}
              face_emoji={topic.subject_code}
              topic={topic.subject_name}
              description={topic.subject_description}
            />
          </div>
        ))}
      </ul>
      <div className="bg-gray-50 p-10 hover:bg-blue-100 m-3">
        <Link href="/subjects/3U/topics/ap3" className="hover: bg-zinc-500">
          <h1>Ap3 revision</h1>
        </Link>
      </div>
      <div className="bg-gray-50 p-10 hover:bg-blue-100 m-3">
        <Link href="/subjects/4U/topics/ap3" className="hover: bg-zinc-500">
          <h1>Ap3 Extension 2 revision</h1>
        </Link>
      </div>
    </div>
  );
}

// const spare_component = (
//   <Link
//     href={`/subjects/${normaliseURL(topic.subject_code)}`}
//     key={key}
//   >
//     <Button key={key} className={"m-4 h-72 w-72 rounded-lg  p-2 "}>
//       {topic.subject_name}
//     </Button>
//   </Link>
// )
