interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driver_licence: string;
  avatar?: string;
  id?: string;
}

export { ICreateUserDTO }