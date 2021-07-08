const { gql } = require("apollo-server");

const typeDefs = gql`
  type Email {
    message: String
    from: String
  }

  type Response {
    success: Boolean
    message: String
    error: String
  }

  input EmailInput {
    message: String!
    from: String!
  }

  type Query {
    email: Email
  }

  type Mutation {
    sendEmail(input: EmailInput!): Response!
  }
`;

module.exports = {
  typeDefs,
};
