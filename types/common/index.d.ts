type Hotel = {
  _id: string,
  title: string,
  address: Address,
  weather: Weather,
  social: Social,
  previews: string[],
  topics: string[]
};


type Address = {
  street: string,
  city: string,
  country: string,
  phone: string
};

type Weather = {
  airTemp: number,
  waterTemp: number
};

type Social = {
  followers: number,
  following: number
};
