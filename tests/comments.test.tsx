import { describe, test } from "@jest/globals";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

import { Comment } from "../src/components/IndividualComments";

describe("expect the upload card to work", () => {
  it("should render the upload card", () => {
    const comment = renderer.create(
      <Comment
        key={1}
        comment={{
          author: "tests",
          content: "tests",
          createdAt: "tests",
          id: "tests",
          questionId: "tests",
          updatedAt: "tests",
        }}
      />,
    );
    expect(comment.toJSON()).toMatchSnapshot();
  });

  it("should display the author's name", () => {
    const comment = render(
      <Comment
        key={1}
        comment={{
          author: "John Doe",
          content: "This is a test comment",
          createdAt: "2022-01-01",
          id: "comment-1",
          questionId: "question-1",
          updatedAt: "2022-01-01",
        }}
      />,
    );
    expect(comment.getByText("John Doe")).toBeInTheDocument();
  });

  it("should display the comment content", () => {
    const comment = render(
      <Comment
        key={1}
        comment={{
          author: "Jane Smith",
          content: "This is another test comment",
          createdAt: "2022-01-01",
          id: "comment-2",
          questionId: "question-1",
          updatedAt: "2022-01-01",
        }}
      />,
    );
    expect(
      comment.getByText("This is another test comment"),
    ).toBeInTheDocument();
  });
});
