interface PersonProps {
  id: number;
  name?: string;
}

type PersonDataGetters  = {
  [Property in keyof PersonProps as `get${Capitalize<Property>}`]-?: string;
}

// remapping props from TS -4.1 - as `get${Capitalize<string & Property>}`




// type СопоставимыйТип = {
//   [ПроизвольныйИдентификатор in Множество]: ПроизвольныйТипДанных;
// }
