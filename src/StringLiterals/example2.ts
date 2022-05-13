type InOrOut<T> = T extends `fade${infer R}` ? R : never;

type In = InOrOut<"fadeIn">;  // "In"
type Out = InOrOut<"fadeOut">; // "Out"
