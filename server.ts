import db from "./src/db/db";
import { ApolloServer} from "apollo-server";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const PORT = 4000;

db.start()

const typeDefsArray = fileLoader("./src/app/schemas/*.graphql");
const resolversArray = fileLoader("./src/app/resolvers/*.ts");

const typeDefs = mergeTypes(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT, () => {
  console.log(`🚀  Server ready at ${PORT}`);
});