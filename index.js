const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const dotenv = require("dotenv");
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT;

server
  .listen(port)
  .then(({ url }) => {
    console.log(`Server is running on ${url}`);
  })
  .catch((err) => {
    console.log("Error when connecting to server ", err);
  });
