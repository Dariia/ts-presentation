// Extract from T those types that are assignable to U

type Extract<T, U> = T extends U ? T : never;

type ExtractA = Extract<string | string[], any[]>; // string[]
type ExtractB = Extract<(() => void) | undefined, Function>; // () => void
type ExtractC = Extract<200 | 400, 200 | 201>; // 200
type ExtractD = Extract<number, boolean>; // never
