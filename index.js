const {ApolloServer, gql} = require("apollo-server");

const products = [
    {
        name: "Bike",
        description: "Mountain Bike",
        quantity: 20,
        price: 299.99,
        onSale: false
    },
    {
        name: "Car",
        description: "Sport Car",
        quantity: 20,
        price: 299.99,
        onSale: false
    },
    {
        name: "Truck",
        description: "Mountain Truck",
        quantity: 20,
        price: 299.99,
        onSale: false
    }
];

const typeDefs = gql`
    type Query {
        hello: String,
        products: [Products!]!,
    }
    type Products {
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        onSale: Boolean!,
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "World!";
        },
        products: () => {
            return products;
        }
    }

};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url);
});