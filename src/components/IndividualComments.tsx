import convertDateTime from "~/server/convertDateTime";

export default function IndividualComments({ comments }: {
  author: string, content: string, createdAt: string, id: string, questionId: string, updatedAt: string
}) {
  console.log("comments", comments);
  return (
    <div className="h-full  ">
      <h1 className="p-4 text-2xl font-semibold leading-none tracking-tight">
        Discussion.
      </h1>
      <div className="p-4">
        {comments.map(({ id, questionId, content, author, createdAt }, key) => {
          return (
            <p key={key}>
              <strong>{author}</strong> wrote {content} at now
            </p>
          );
        })}
      </div>
    </div>
  );
}
