🧪 Jest – JavaScript Testing Framework
Jest is a delightful JavaScript testing framework by Facebook, used to test JavaScript and TypeScript code with zero configuration.
It provides powerful utilities for unit, integration, and snapshot testing.

Matchers
Here are frequently used Jest matchers:

🎯 1. Equality and Identity
Matcher	Description
.toBe()	Exact equality (===)
.not.toBe()	Negate exact equality
.toEqual()	Deep equality for objects/arrays
.not.toEqual()	Negate deep equality

🟢 2. Truthiness
Matcher	Description
.toBeNull()	Value is exactly null
.toBeUndefined()	Value is undefined
.toBeDefined()	Value is not undefined
.toBeTruthy()	Value evaluates to true
.toBeFalsy()	Value evaluates to false

🔢 3. Numbers & Comparison
Matcher	Description
.toBeGreaterThan(number)	Greater than
.toBeGreaterThanOrEqual()	Greater than or equal
.toBeLessThan()	Less than
.toBeLessThanOrEqual()	Less than or equal
.toBeCloseTo()	Floating-point precision comparison

📝 4. Strings
Matcher	Description
.toMatch()	String or RegExp match

📚 5. Arrays & Iterables
Matcher	Description
.toContain()	Checks if array/string contains item
.toContainEqual()	Checks if array contains matching object
.toHaveLength()	Checks length of array/string

🏷️ 6. Objects & Properties
Matcher	Description
.toHaveProperty()	Checks property existence and value

⚠️ 7. Exceptions & Errors
Matcher	Description
.toThrow()	Expects function to throw an error
.toThrowError()	Expects specific error or message

🌀 8. Promises (Asynchronous)
Matcher	Description
.resolves	Expect promise to resolve successfully
.rejects	Expect promise to reject with error

