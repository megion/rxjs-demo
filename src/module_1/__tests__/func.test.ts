import { sum } from "../lesson_1/func"

test("func sum", () => {
  const s: number = sum(1, 2)
  expect(s).toBe(1)
})
