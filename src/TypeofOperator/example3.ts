const locales = [
  {
    locale: 'se',
    language: 'Swedish',
  },
  {
    locale: 'en',
    language: 'English',
  }
] as const;
type Locale = typeof locales[number]['locale'];
// type Locale = "se" | "en"



// as const ----------------------------------------------

/**
 * When we construct new literal expressions with const assertions, we can signal to the language that

 no literal types in that expression should be widened (e.g. no going from "hello" to string)
 object literals get readonly properties
 array literals become readonly tuples
 */

// 1.
// Type '"hello"'
let x = "hello" as const;
type xType = typeof x;

// Type 'readonly [10, 20]'
let y = [10, 20] as const;
type yType = typeof y;

// Type '{ readonly text: "hello", readonly text: "hi" }'
let z = { text: "hello", text1: 'hi' } as const;
type zType = typeof z;

// 2.
// Without using `as const`:
for(const field of ['hello','world']){
  // The type of `field` is just 'string'
}

// With `as const`:
for(const field of ['hello','world'] as const){
  // The type of `field` is 'hello'|'world'
}

// 3.

const colors = [
  { color: 'red', code: { rgb: [255, 0, 0], hex: '#FF0000' } },
  { color: 'green', code: { rgb: [0, 255, 0], hex: '#00FF00' } },
  { color: 'blue', code: { rgb: [0, 0, 255], hex: '#0000FF' } },
] as const;

// const colors: readonly [
//   {
//     readonly color: 'red';
//     readonly code: {
//       readonly rgb: readonly [255, 0, 0];
//       readonly hex: '#FF0000';
//     };
//   },
//   ...
// ]
