import { gql } from "apollo-server-express";
import resolvers from "./resolvers";

const typeDefs = gql`
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
  type Query {
    allCourses: [Course]
    course(id: Int!): Course
  }
  type Mutation {
    addCourse(title: String!, author: String!, topic: String!): Course
  }
`;

const schema = {
  typeDefs,
  resolvers
};

export default schema;
