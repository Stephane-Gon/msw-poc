import { factory, primaryKey, } from '@mswjs/data';

const db = factory({
  users: {
    id: primaryKey(Number),
    email: String,
    first_name: String,
    last_name: String,
  }
})

// Default Users
 db.users.create({
  id: 1,
  email: 'john1@ubiwhere.com',
  first_name: 'John',
  last_name: 'Doe1',
});
db.users.create({
  id: 2,
  email: 'john2@ubiwhere.com',
  first_name: 'John',
  last_name: 'Doe2',
});
db.users.create({
  id: 3,
  email: 'john3@ubiwhere.com',
  first_name: 'John',
  last_name: 'Doe3',
});
db.users.create({
  id: 4,
  email: 'john4@ubiwhere.com',
  first_name: 'John',
  last_name: 'Doe4',
});
db.users.create({
  id: 5,
  email: 'john5@ubiwhere.com',
  first_name: 'John5',
  last_name: 'Doe5',
});


export default db