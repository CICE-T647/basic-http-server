const movies = require('./moviesData.js');


// printConsole
/* exports.printCosole = () => {
    return ("Funciona a las mil maravillas");
} */


// getMovieById

exports.getMovieById = (id, callback) => {

    const movie = movies.find(movie => {
        return movie.id === id;
    })

    if (!movie) callback(`No hay ninguna pelicula con el id ${id}`);
    else callback(null, movie);

}

/* getMovieById(50, (error, data) => {
    if (error) return console.log(error);
    return console.log(data);
}); */





// getMovieByTitle

/* const getMovieFromMoviesByTitle = (e) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pelis = [];
            movies.forEach(movie => {
                if (movie.title.startsWith(e)) {
                    pelis.push(movie.title);
                }
            });

            if (pelis.length == 0) {
                reject("No hay pelis");
            }

            resolve(pelis);



        }, 3000)
    });
}

const getMovieByTitle = (e) => {
    getMovieFromMoviesByTitle(e)
        .then(pelis => console.log(pelis))
        .catch(error => console.log(error));

}; */

/* getMovieByTitle("x"); */




// getMovieByShowtimes

/* const getMovieFromMoviesByShowTime = (e) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const moviesMatched = movies.filter(movie => movie.showtimes.includes(e))

            if (moviesMatched.length == 0) {
                reject("No se ha encontrado niguna peli con este horario");
            }
            resolve(moviesMatched);
        }, 3000)
    });
}

const getMoviesByShowTime = async(e) => {
    try {
        const moviesmatched = await getMovieFromMoviesByShowTime(e);
        return console.log(moviesmatched);
    } catch (error) {
        return console.log(error);
    }

}; */

/* getMoviesByShowTime("13:70"); */