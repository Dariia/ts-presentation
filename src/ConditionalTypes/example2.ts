// Exclude null and undefined from T

type NonNullable<T> = T extends null | undefined ? never : T;

type NonNullableA = NonNullable<boolean>; // boolean
type NonNullableB = NonNullable<number | null >; // number
type NonNullableC = NonNullable<string | undefined>; // string
type NonNullableD = NonNullable<null | undefined>; // never
