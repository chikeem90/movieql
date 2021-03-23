const doyeonkim = {
    name: "DoYeonKim",
    age: 32,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => doyeonkim
    }
}

export default resolvers;