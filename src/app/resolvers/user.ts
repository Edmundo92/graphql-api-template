import { User } from "../models/User";

export const resolvers = {
  Query: {
    users: async () => {
      return await User.query();
    }
  },
};