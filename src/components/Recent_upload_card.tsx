import Link from "next/link"

export default function Recent_upload_card({ key, upload }: { key: number, upload: { topic: string, id: string, question_url: string, answer_url: string, title: string, content_level: string, name: string, createdAt: string } }) {
  return (
    <div key={key}>

      <Link href={`/question/${upload.id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{upload.title}</h5>
        <h4 className="text-xl p-2">Topic: {upload.topic}</h4>
        <p className="font-normal text-gray-700 dark:text-gray-400">{`Great question. Uploaded by ${upload.name}`}</p>
      </Link>
    </div>
  )
}


