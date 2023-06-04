const { ObjectId } = require('bson')
const db = require('../models')

async function getBaseUser() {
  const repos = await db.Repo.find().lean()
  
  const repo = repos.map((repo) => repo._id)

  const baseUser = {
      _id: new ObjectId(),
      name: "Iuliia Shikhanova",
      login: "IuliiaNova",
      email: "yshihanova@gmail.com",
      location: "Las Palmas de Gran Canaria",
      repos: [
        // repo[0].toString(),
        // repo[1].toString(),
        // repo[2].toString(),
        // repo[3].toString(),
        // repo[4].toString(),
        // repo[5].toString(),
        // repo[6].toString(),
        // repo[7].toString(),
        // repo[8].toString(),
        // repo[9].toString(),
        // repo[10].toString(),
        // repo[11].toString()
      ],
      createdAt: '2023-06-02T09:24:12.787+00:00',
      updatedAt: '2023-06-02T09:59:08.123+00:00'

    }
  return [baseUser]
}

module.exports = {
  getBaseUser
}