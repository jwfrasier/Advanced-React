const Mutations = {
  async createItem(parent, arguments, context, info) {
    // TODO check if they are logged in
    const item = await context.db.mutation.createItem(
      {
        data: {
          ...arguments
        }
      },
      info
    );
    return item;
  }
  // createDog(parent, arguments, context, info) {
  //   //create a dog here!
  //   global.dogs = global.dogs || [];
  //   // create a dog
  //   const newDog = { name: arguments.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  //   // console.log(arguments);
  // }
};

module.exports = Mutations;
