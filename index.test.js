const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe("Head", () => {
    test("This is testing heading 1", () => {
      const title = document.querySelector("#header1");
      expect(title).toBeTruthy();
      expect(title.innerHTML).toContain("JS In Browser");
    });
    test("This is testing lists", () => {
      const list = document.querySelectorAll("li");
      const arr = Array.from(list);
      expect(arr).toHaveLength(5);
    });
  });
});
