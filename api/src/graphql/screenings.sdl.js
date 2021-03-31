export const schema = gql`
  type Screening {
    id: Int!
    date: String!
    time: String!
    location: [Location]!
    movie: Movie!
    movieId: Int!
  }

  type Query {
    screenings: [Screening!]!
    screening(id: Int!): Screening
  }

  input CreateScreeningInput {
    date: String!
    time: String!
    movieId: Int!
  }

  input UpdateScreeningInput {
    date: String
    time: String
    movieId: Int
  }

  type Mutation {
    createScreening(input: CreateScreeningInput!): Screening!
    updateScreening(id: Int!, input: UpdateScreeningInput!): Screening!
    deleteScreening(id: Int!): Screening!
  }
`
