import { describe, expect, test } from "@jest/globals";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

import Recent_upload_card from "../src/components/Recent_upload_card";

describe("Valid recent upload card", () => {
  it("Returns a upload card that can be seen on the home page", () => {
    const upload_card = renderer.create(
      <Recent_upload_card
        upload={{
          answer_url: "tests",
          question_url: "tests",
          content_level: "tests",
          createdAt: "tests",
          id: "tests",
          name: "tests",
          title: "tests",
          topic: "tests",
        }}
      />,
    );

    const tree = upload_card.toJSON();
    if (tree === null) {
      throw new Error("Component failed to render");
    }

    expect(tree).toMatchSnapshot();
  });
});
