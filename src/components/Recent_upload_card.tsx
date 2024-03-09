import Link from "next/link";

export default function Recent_upload_card({
  key,
  upload,
}: {
  key: number;
  upload: {
    topic: string;
    id: string;
    question_url: string;
    answer_url: string;
    title: string;
    content_level: string;
    name: string;
    createdAt: string;
  };
}) {
  return (
    <div key={key}>
      <Link
        href={`/question/${upload.id}`}
        className="block h-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {upload.title}
        </h5>
        <h4 className="p-2 text-xl">Topic: {upload.topic}</h4>
        <p className="font-normal text-gray-700 dark:text-gray-400">{`Great question. Uploaded by ${upload.name}`}</p>
      </Link>
    </div>
  );
}
