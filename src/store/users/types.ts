interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UsersState {
  users: User[]
}

export type {
  User,
  UsersState
}