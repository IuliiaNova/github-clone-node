const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
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