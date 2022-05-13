type Person = {
  firstname: string
  lastname: string
  email?: string
  age: number
}

type PersonWithoutAgeAndEmail = Omit<Person, 'age' | 'email'>

// type PersonWithoutAgeAndEmail = {
//   firstname: string
//   lastname: string
// }

type SimplePerson = Pick<Person, "firstname" | "lastname">

// type SimplePerson = {
//   firstname: string;
//   lastname: string;
// }


type PartialPerson = Partial<Person>


// type PartialPerson = {
//   firstname?: string | undefined
//   lastname?: string | undefined
//   email?: string | undefined
//   age?: number | undefined
// }


type RequiredPerson = Required<PartialPerson>

// type RequiredPerson = {
//   firstname: string
//   lastname: string
//   email: string
//   age: number
// }


// { x: string; y: string }
type Type = Record<"x" | "y", string>;

interface Human {
  id: string;
  name: string;
  surname: string;
}

interface Cat {
  id: string;
  name: string;
  sound: string;
}

// "id" | "name"
type CommonKeys = Extract<keyof Human, keyof Cat>;


const addNumbers = (x: string, y: number) => {
  return x + y;
};

// [string, number]
type FunctionParameters = Parameters<typeof addNumbers>;


const getUser = () => ({
  name: "John",
  surname: "Doe",
  age: 18,
});

// { name: string; surname: string; age: number; }
type FunctionReturnType = ReturnType<typeof getUser>;
