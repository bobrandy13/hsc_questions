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
  console.log("comments", comments);
  return (
    <div className="h-full  ">
      <h1 className="p-4 text-2xl font-semibold leading-none tracking-tight">
        Discussion.
      </h1>
      <div className="p-4">
        {comments.map((comment, key: number) => {
          if (comments.length === 0) return;
          return (
            <p key={key}>
              <strong>{comment.author}</strong> wrote {comment.content} at{" "}
              {convertDateTime(comment.createdAt).toDateString()}
            </p>
          );
        })}
      </div>
    </div>
  );
}
