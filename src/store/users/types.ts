interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UsersState {
  users: User[]
}

interface CreateUserPayload {
  email: string;
  firstName: string;
  lastName: string;
}

export type {
  User,
  UsersState,
  CreateUserPayload
}