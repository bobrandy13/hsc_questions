import { describe, expect, test } from "@jest/globals"
import normaliseURL from "../src/server/normaliseURL"

describe("url testing", () => {
  test("should remove spaces from url", () => {
    expect(normaliseURL("normalise url")).toBe("normalise_url");
  });

  test("potato should become potato", () => {
    expect(normaliseURL("potato")).toBe("potato");
  })


  test("hello world should become hello_world", () => {
    expect(normaliseURL("hello world")).toBe("hello_world");
  });

  test("complex numbers -> complex_numbers", () => {
    expect(normaliseURL("complex numbers")).toBe("complex_numbers");
  });

  test("series and sequences -> series_and_sequneces", () => {
    expect(normaliseURL("series and sequences")).toBe("series_and_sequences");
  });
});
