const { gql } = require('apollo-server');

module.exports = gql`
  type Video {
    url: String!,
    _id: ID!
  }
  type Query {
    getVideos: [Video]
  }
`;