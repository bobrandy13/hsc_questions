import convertDateTime from "~/server/convertDateTime";

export default function IndividualComments({
  comments,
}: {
  comments: Array<{
    author: string;
    content: string;
    createdAt: string;
    id: string;
    questionId: string;
    updatedAt: string;
  }>;
}) {
  return (
    <div className="h-full overflow-y-scroll">
      <h1 className="p-4 text-2xl font-semibold leading-none tracking-tight">
        Discussion.
      </h1>
      <div className="h-full overflow-y-scroll p-4">
        {comments.map((comment, key: number) => {
          if (comments.length === 0) return;
          return (
            <div key={key}>
              <Comment comment={comment} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export function Comment({
  comment,
}: {
  comment: {
    author: string;
    content: string;
    createdAt: string;
    id: string;
    questionId: string;
    updatedAt: string;
  };
}) {
  return (
    <div className="p-3 bg-gray-100 m-1 rounded" >
      <div>
        <p className="inline">
          <strong>{comment.author}</strong>:
        </p>

        <p className="float-right">{convertDateTime(comment.createdAt).toTimeString()}</p>
      </div>
      <p>{comment.content}</p>
    </div>
  );
}
