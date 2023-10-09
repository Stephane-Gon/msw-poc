import { rest } from 'msw';

import db from '../db';
import { CreateUserPayload } from '../../store/users/types';

//GET HANDLERS
const getAllUsers = rest.get('/api/users', (__, res, ctx) => {
  //no pagination
  const users = db.users.getAll();

  return res(
    ctx.status(200),
    ctx.json(users),
  );
});

const getUser = rest.get(`api/users/:id`, (req, res, ctx) => {
  const { id } = req.params;
  const userId: number = parseInt(id as string)
  
  const user = db.users.findFirst({
    where: {
      id: {
        equals: userId
      }
    }
  });

  return res(
    ctx.status(200),
    ctx.json(user),
  );
});


// CREATE HANDLERS
const createUser = rest.post('/api/users/create', (req, res, ctx) => {

  const {
    email,
    firstName,
    lastName
  } = req.body as Partial<CreateUserPayload>;

  const allUsers = db.users.getAll();

  const id = allUsers.length + 1;

  const user = {
    id,
    email,
    first_name: firstName,
    last_name: lastName
  };

  db.users.create(user);

  return res(ctx.status(200), ctx.json(user));
});


export default [createUser, getAllUsers, getUser];

