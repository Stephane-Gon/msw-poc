interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UsersState {
  users: User[]
}

export type {
  User,
  UsersState
}