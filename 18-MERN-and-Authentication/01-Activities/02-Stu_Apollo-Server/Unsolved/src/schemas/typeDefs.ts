const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # Define the Class type with an _id field of type ID,
   a name field of type String, a building field of type String, and a creditHours field of type Int
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # Define the Query type with a classes field 
  that returns an array of Class objects
  # TODO: Add a comment describing the functionality of this statement
  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
