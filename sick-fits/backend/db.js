const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql"
});
