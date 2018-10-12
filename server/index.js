const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const cors = require('cors');

const resolvers = {
	Query: {
		users: (_, args, context, info) => {
			return context.prisma.query.users({args}, info);
		}
	},
	// Mutation: {
	// }
};

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers,
	context: req => ({
		...req,
		prisma: new Prisma({
			typeDefs: './generated/prisma.graphql',
			endpoint: 'http://localhost:4466',
		}),
	}),
});

server.use(cors());
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));