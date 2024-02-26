import { test, describe, expect } from "vitest";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ESLint } = require("eslint");

describe("Test eslint", () => {
  test("Function names should be in camelCase - Fail", async () => {
    const eslint = new ESLint();

    const [error] = await eslint.lintText(`
          function invalid_function_name() {
            return true;
          }
          invalid_function_name()
        `);
    expect(error.errorCount).toBe(1);
    expect(error.messages[0].ruleId).toBe(
      "@typescript-eslint/naming-convention",
    );
  });
  test("Function names should be in camelCase - Success", async () => {
    const eslint = new ESLint();

    const [error] = await eslint.lintText(`
          function validFunctionName() {
            return true;
          }
          validFunctionName()
        `);

    expect(error.errorCount).toBe(0);
  });

  //   test("No use of Moment library", async () => {
  //     const eslint = new ESLint();

  //     const [error] = await eslint.lintText(`
  //             const moment = require('moment');
  //         `);
  //     expect(error.messages[0].ruleId).toBe("no-moment-library");
  //   });

  test("No console.log()", async () => {
    const eslint = new ESLint();

    const [error] = await eslint.lintText(`
            console.log("hæ");
        `);
    expect(error.errorCount).toBe(1);
    expect(error.messages[0].ruleId).toBe("no-console");
  });
});
