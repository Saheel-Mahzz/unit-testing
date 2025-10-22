import { describe, it, expect } from 'vitest'
import { sum } from '../utils/sum'

describe('sum function', () => {
  it('should return correct sum of two numbers', () => {
    const result = sum(2, 3)
    expect(result).toBe(5)
  })
})


/*
describe ==> Think of it like a folder name... for related tests...
it doesn’t run any code itself —
it just groups tests, so your output looks nice and organized.

2. 🧩 it() or test()
→ This is one single test (a small checking point).
it('should return correct sum of two numbers', () => {
  const result = sum(2, 3)
  // check if result is 5
})
  It basically means:
“Hey Vitest, please try this small scenario and tell me if it passes or fails.”
==> You can write many it() inside one describe().

🔍 expect()
→ This is the actual check — where Vitest decides pass ✅ or fail ❌.
This line means:

“I expect the value of result to be 5.”

If it’s true → ✅ passed
If not → ❌ failed

*/