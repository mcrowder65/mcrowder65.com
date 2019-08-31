import { calculateTabWidth } from "../header";

test("calculate tab width", () => {
  expect(calculateTabWidth()).toEqual("50%");
});
