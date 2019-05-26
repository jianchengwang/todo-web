// Partial Application
const fetch = require('node-fetch')

const getFromAPI = baseUrl => endPoint => cb => 
    fetch(`${baseUrl}${endPoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
        console.error(err.message)
    })

const getGithub = getFromAPI('https://api.github.com')
const getGithubUsers = getGithub("/users")

getGithubUsers(data => {
    console.info(data)
    console.info(data.map(user => user.login))
})
