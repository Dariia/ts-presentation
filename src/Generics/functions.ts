interface BaseDataInterface {
  id: number;
  displayName: string;
}

interface User extends BaseDataInterface {
  email: string;
  name: string;
}

interface Product extends BaseDataInterface {
  price: number;
}

const usersList: User[] = [{
  id: 1,
  displayName: 'Jonathan12',
  email: 'user@gmail.com',
  name: 'John Doerr',
}];

const productsList: Product[] = [{
  id: 3,
  displayName: 'Iphone XS',
  price: 120
}];

function getDisplayName<T extends User | Product>( item: T ): T["displayName"] {
  return item.displayName;
}

const userDisplayName = getDisplayName<User>(usersList[0]);
const productDisplayName = getDisplayName<Product>(productsList[0]);
