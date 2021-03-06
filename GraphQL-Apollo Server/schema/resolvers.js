// import fake database 
const { UserList, MovieList } = require("./../fake-data")

const resolvers = {

    Query: {
        users() {
            return UserList;
        },
        user(parent, args) {
            return UserList.find(user => user.id === Number(args.id));
        },
        movies() {
            return MovieList;
        },
        movie(parent, args) {
            return MovieList.find(movie => movie.id === Number(args.id));
        },
    },
    User: {
        favMovies(parent) {
            return MovieList.filter(movie =>
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010);
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = {
                id: UserList.length + 1,
                name: args.input.name,
                username: args.input.username,
                age: args.input.age,
                nationality : args.input.nationality
            }
            UserList.push(newUser);
            console.log(newUser);
            return newUser;

        },
        updateUsername(parent, args) {
            const { id, newUsername } = args.input
            let userUpdated; 
            UserList.forEach(user => { 
                if (user.id == id) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            })
            console.log(args.input);
            return userUpdated;

        }
    }
}

module.exports = { resolvers }