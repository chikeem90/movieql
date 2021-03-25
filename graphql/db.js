let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

// movies를 반환하는 함수
export const getMovies = () => movies;

// id에 해당하는 movie를 반환하는 함수
export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

// id에 해당하는 movie를 제외하는 함수
export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    // 해당하는 id의 movie가 있어서 제외된 경우
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

// add Movie
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}