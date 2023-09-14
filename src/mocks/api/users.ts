import { rest } from 'msw';

import db from '../db';
import { CreateUserPayload } from '../../store/users/types';

//GET HANDLERS
const getAllUsers = rest.get('/users/', (__, res, ctx) => {
  //no pagination
  const users = db.users.getAll();


  return res(
    ctx.status(200),
    ctx.json({
      data: users
    }),
  );
});

// CREATE HANDLERS
const createUser = rest.post('/users/create', (req, res, ctx) => {
  const {
    email,
    firstName,
    lastName
  } = req.body as Partial<CreateUserPayload>;

  const allUsers = db.users.getAll();

  const id = String(allUsers.length + 1);

  const user = {
    id,
    email,
    first_name: firstName,
    last_name: lastName
  };

  db.users.create(user);

  return res(ctx.status(200), ctx.json(user));
});

export default [createUser, getAllUsers];