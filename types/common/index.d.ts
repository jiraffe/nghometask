type Hotel = {
  _id: number,
  title: string,
  address: {
    street: string,
    city: string,
    country: string
  },
  phone: string,
  airTemp: number,
  waterTemp: number,
  followers: number,
  following: number,
  previews: string[],
  topics: string[]
};
