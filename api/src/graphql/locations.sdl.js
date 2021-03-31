export const schema = gql`
  type Location {
    id: Int!
    name: String!
    capacity: Int!
    address: String!
    screening: [Screening]!
    createdAt: DateTime!
  }

  type Query {
    locations: [Location!]!
    location(id: Int!): Location
  }

  input CreateLocationInput {
    name: String!
    capacity: Int!
    address: String!
  }

  input UpdateLocationInput {
    name: String
    capacity: Int
    address: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
    deleteLocation(id: Int!): Location!
  }
`
