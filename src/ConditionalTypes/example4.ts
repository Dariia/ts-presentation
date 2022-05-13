// Exclude from T those types that are assignable to U

type Exclude<T, U> = T extends U ? never : T;

type ExcludeA = Exclude<string | string[], any[]>; // string
type ExcludeB = Exclude<(() => void) | null, Function>; // null
type ExcludeC = Exclude<200 | 400, 200 | 201>; // 400
type ExcludeD = Exclude<number, boolean>; // number
