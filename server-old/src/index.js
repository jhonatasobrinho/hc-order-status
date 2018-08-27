const {GraphQLServer} = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
    Query: {
        info: () => `This is a test`
    }
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'https://eu1.prisma.sh/jhonata-sobrinho-2ca832/hc-order-status/dev',
            secret: 'mysecret123',
            debug: true
        })
    })
});

server.start(() => console.log('Server is running on http://localhost:4000'));