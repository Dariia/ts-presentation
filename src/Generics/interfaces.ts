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

const users: User[] = [{
  id: 1,
  displayName: 'Jonathan12',
  email: 'user@gmail.com',
  name: 'John Doerr',
}];

const products: Product[] = [{
  id: 3,
  displayName: 'Iphone XS',
  price: 120
}];

interface DataWithCreatedAt<T extends User | Product> {
  data: T;
  createdAt: string;
}

function setCreatedAtData<T extends User | Product>( item: T ): DataWithCreatedAt<T> {
  return { data: { ...item }, createdAt: new Date().toDateString() };
}

const user = setCreatedAtData<User>(users[0]);
const product = setCreatedAtData<Product>(products[0]);

