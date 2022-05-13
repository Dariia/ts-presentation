const someData = {
  value: 123,
  text: 'text',
  subData: {
    value: false
  }
};

type SomeDataType = typeof someData;

// type SomeOtherData = {
//   value: number;
//   text: string;
//   subData: {
//     value: boolean;
//   };
// }

