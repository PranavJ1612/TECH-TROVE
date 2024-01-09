import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Pranav J',
    email: 'pranav@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Prajwal',
    email: 'prajwal@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;