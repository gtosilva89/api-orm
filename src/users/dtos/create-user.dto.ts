export type CreateUserDto = {
  name: string;
  email: string;
  document: string;
  birth_date: Date;
  phone_number: string;
  address: string;
  active: boolean;
};
