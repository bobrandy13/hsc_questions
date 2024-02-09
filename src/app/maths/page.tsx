import Link from "next/link";
import { Button } from "~/components/ui/button";
import normaliseURL from "~/server/normaliseURL";

const topics = [
  { subject_name: "Maths Extension 2", subject_code: "4U" },
  { subject_name: "Maths Extension 1", subject_code: "3U" },
  { subject_name: "Maths Advanced", subject_code: "2U" },
  { subject_name: "Maths Standard", subject_code: "21" },
];
export default function Maths() {
  return (
    <div className="flex h-screen w-screen justify-center p-10 md:justify-normal">
      <ul className={"flex h-screen w-full md:flex-row"}>
        {topics.map((topic, key) => (
          <Link
            href={`/subjects/${normaliseURL(topic.subject_code)}`}
            key={key}
          >
            <Button key={key} className={"m-4 h-72 w-72 rounded-lg  p-2 "}>
              {topic.subject_name}
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
}
