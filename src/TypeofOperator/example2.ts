const data = ['text 1', 'text 2'] as const;
type Data = typeof data[number];


// type Data = "text 1" | "text 2"
