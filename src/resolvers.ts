import { User } from './models/User';

export const resolvers = {
  Query: {
    users: (): Object => User.find()
  },
  Mutation: {
    createUser: async (_: any, user: Object) => {
      const u = new User(user);
      await u.save();
      return u;
    }
  }
};
