
const { URL } = require('url')
const fetch = require('node-fetch')

//  get movies from local json
// const movies = require('../data/movies.json')
const { query } = require('./util/hasura');

exports.handler = async () => {

    // get movies from db
    const { movies } = await query({
        query: `
            query {
                movies {
                    id
                    title
                    tagline
                    poster
                }
            }
        `,
    });
    console.info(movies)

    const movieScoreApi = new URL("https://www.omdbapi.com/");
    // add the secret API key to the query string
    movieScoreApi.searchParams.set('apiKey', process.env.OMDB_API_KEY)

    const promises = movies.map(movie => {
        movieScoreApi.searchParams.set('i', movie.id);
        return fetch(movieScoreApi)
        .then(response => response.json())
        .then(data => {
            const scores = data.Ratings;
            return {
                ...movie,
                scores
            }
        })
    })

    // awaiting all Promises lets the requests happen in parallel
    // see: https://lwj.dev/blog/keep-async-await-from-blocking-execution/
    const moviesWithRatings = await Promise.all(promises);

    return {
        statusCode: 200,
        body: JSON.stringify(moviesWithRatings),
    }
}