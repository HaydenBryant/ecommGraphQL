const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const StickType = new GraphQLObjectType({
    name: "Stick",
    fields: () => ({
        id: { type: GraphQLID },
        brand: { type: GraphQLString },
        material: { type: GraphQLString },
        model: { type: GraphQLString },
        hand: { type: GraphQLString },
        length: { type: GraphQLInt },
        curve: { type: GraphQLInt },
        pattern: { type: GraphQLString },
        color: { type: GraphQLString },
        condition: { type: GraphQLString },
        price: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        stick: {
            type: StickType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                //get data from db
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})