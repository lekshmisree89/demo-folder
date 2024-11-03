
const typeDefs = `
    type Matchup {
        _id: ID!
        team1: String!
        team2: String!
        team1Score: Int
        team2Score: Int
        date: String
    }




 type Query {
        matchups(_id: ID!): [Matchup]
    }

    type Mutation {
        addMatchup(team1: String!, team2: String!, team1Score: Int, team2Score: Int, date: String): Matchup
        updateMatchup(_id: ID!, team1: String, team2: String, team1Score: Int, team2Score: Int, date: String): Matchup
        deleteMatchup(_id: ID!): Matchup
    }
`
 export default typeDefs;