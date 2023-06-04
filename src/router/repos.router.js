const express = require('express')
const {postRepo, getRepos, searchRepo, updateRepo, getRepoById, deleteRepoById} = require('../controllers/repos.controller')

const api = express.Router()

api
  .post('/post-repo', postRepo)
  .get('/get-repos', getRepos)
  .get('/get-repos/:id', getRepoById)
  .put('/get-repos/:id', updateRepo)
  .delete('/get-repos/:id', deleteRepoById)
  .get('/search-repo/:query', searchRepo)
  

module.exports = api