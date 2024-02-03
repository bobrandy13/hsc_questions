import Link from "next/link";

const topics = [
    "Mathematics Advanced", "Mathematics Extension 1", "Mathematics Extension 2"
]
export default function Maths() {
  return (
    <div className="h-screen w-screen p-10 flex justify-center md:justify-normal">
        <ul className={"h-screen w-full flex md:flex-row"}>
            {topics.map((topic, key) =>
                <Link href={`/maths/${topic}`} key={key}>
                    <div key={key} className={"w-72 h-72 bg-black text-white m-4 rounded p-2 hover:bg-blue-300"}>
                        {topic}
                    </div>
                </Link>
            )}

        </ul>
    </div>
  );
}
