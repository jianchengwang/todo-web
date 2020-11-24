const movies = require('../data/movies.json')

exports.handler = async({ queryStringParameters }) => {
    const { id } = queryStringParameters;
    const moive = movies.find(m => m.id === id);

    if(!moive) {
        return {
            statusCode: 404,
            body: 'Not Found'
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(moive)
    }
}