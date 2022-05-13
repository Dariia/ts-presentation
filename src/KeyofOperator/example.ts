interface UserProps {
  id: number;
  name: string;
}

type UserProperties = keyof UserProps; // "id" | "name"

let userProperty: UserProperties = 'name';

// Assigning keyof T to a string works, but, assigning any string to keyof T doesn't:
let someString: string = userProperty; // OK
userProperty = someString; // Error
