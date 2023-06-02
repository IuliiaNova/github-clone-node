const { Schema, model } = require('mongoose');

const RepoSchema = new Schema({
  userId: String,
  name: String,
  visibility: String, 
  language: String
}, {
  timestamps: true
});

const RepoModel = model('Repo', RepoSchema);

module.exports = RepoModel;

