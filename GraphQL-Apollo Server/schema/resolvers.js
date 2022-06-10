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
    }
}

module.exports = { resolvers }