interface UserInterface {
  id: number;
  name: 'John' | 'Kelly' | 'Ann' | 'KK';
  address: {
    street: string;
    city: number;
    country: string;
    fff: boolean;
  };
}

function updateAddress(
  id: UserInterface['id'],
  address: UserInterface['address']
) {}


type City = UserInterface['address']['city']; // number
type IdOrName = UserInterface['id' | 'name']; // number | 'John' | 'Kelly' | 'Ann' | 'KK'
