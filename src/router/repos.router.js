const express = require('express')
const {postRepo, getRepos, searchRepo} = require('../controllers/repos.controller')

const api = express.Router()

api
  .post('/post-repo', postRepo)
  .get('/get-repos', getRepos)
  .get('/search-repo/:query', searchRepo)

module.exports = api