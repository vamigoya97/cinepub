export const schema = gql`
  type Movie {
    id: Int!
    title: String!
    director: String!
    poster_url: String!
    screening: [Screening]!
    createdAt: DateTime!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
  }

  input CreateMovieInput {
    title: String!
    director: String!
    poster_url: String!
  }

  input UpdateMovieInput {
    title: String
    director: String
    poster_url: String
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie!
    updateMovie(id: Int!, input: UpdateMovieInput!): Movie!
    deleteMovie(id: Int!): Movie!
  }
`
