


const typeDefs = `
  type School {
    _id: ID!
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }
#this is the schema for the class type
  type Class {
    _id: ID!
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID!
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
 

  }

  type Query {
    #like interface ithis is the query type
    
    schools: [School]
    classes: [Class]
    professors: [Professor]

  }
`;

export default typeDefs;
