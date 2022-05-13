// Obtain the return type of a function type

type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
  ) => infer R
  ? R
  : any;


type ReturnTypeA = ReturnType<() => string>; // string
type ReturnTypeB = ReturnType<() => () => any[]>; // () => any[]
type ReturnTypeC = ReturnType<typeof Math.random>; // number
type ReturnTypeD = ReturnType<typeof Array.isArray>; // boolean





// Infer allows us to define a variable within our constraint to be referenced or returned.
// Key word infer can be used only in conditional types.
// Infer Example ----------------------------------------------------

// 1 - Second argument return type
type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
  ) => any
  ? SecondArgument
  : never

type t = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // number


// 2 - Promise ReturnType

type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T

type myPromiseType = PromiseReturnType<Promise<string>> // string


// 3 -  Array Type

type ArrayType<T> = T extends (infer Item)[] ? Item : T

type myArrayType = ArrayType<[string, number]> // string | number
