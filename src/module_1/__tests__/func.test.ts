import { sum } from "../func"

test("func sum", () => {
  const s: number = sum(1, 2)
  expect(s).toBe(1)
})
