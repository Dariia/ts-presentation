type T0<T> = { +readonly [P in keyof T]+?: T[P] }; // добавит указанные модификаторы
type T1<T> = { -readonly [P in keyof T]-?: T[P] }; // удалит указынные модификаторы


interface IT { a: number; readonly b?: string; }

let v0: T0<IT>; // { readonly a?: number; readonly b?: string; }
let v1: T1<IT>; // { a: number; b: string; }
