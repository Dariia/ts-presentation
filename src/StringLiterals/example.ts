type Direction = `${"DDD" | "Down" | "Left" | "Right" | "Up"}${"" | "Big"}`;
type Position = "Top" | "Bottom";
type Entry = "In" | "Out";
type FadeClassNames = `prefix${Entry}${"" | Direction | Position}`;

// "fadeIn" | "fadeInDown" | "fadeInDownBig" ...

type ClassNames = FadeClassNames;

function addAnimateClass(element: Element, className: ClassNames);
