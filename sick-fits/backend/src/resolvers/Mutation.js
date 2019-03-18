const Mutations = {
  async createItem(parent, arguments, context, info) {
    // TODO check if they are logged in

    // this is interfacing with the prisma database, which is accessed via context, then calling a query or mutation, then you have access to all of the mutations or queries in the prisma.graphql file
    // This returns a promise
    const item = await context.db.mutation.createItem(
      {
        data: {
          ...arguments
        }
      },
      // the actual query is in info, taking the query from the frontend to the backend, which is why we pass the "info" variable in
      info
    );
    return item;
  },
  updateItem(parent, arguments, context, info) {
    // First take a copy of the updates
    const updates = { ...arguments };
    //remove id from the updates
    delete updates.id;
    //run the update method
    return context.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: arguments.id
        }
      },
      info
    );
  }
};

module.exports = Mutations;
