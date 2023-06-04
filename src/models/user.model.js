const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  id: String, 
  name: { type: String, required: true },
  login: { type: String, required: true },
  location: String,
  email: { type: String, required: true, unique: true },
  repos: [{
      type: Schema.Types.ObjectId,
      ref: 'Repo'
    }],
  stars: [{
      type: Schema.Types.ObjectId,
      ref: 'Repo'
    }]
}, {
timestamps: true
})

const UserModel = model('User', UserSchema)

module.exports = UserModel