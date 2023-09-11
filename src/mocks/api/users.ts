import { rest } from 'msw';

import db from '../db';


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

export {
  getAllUsers
}