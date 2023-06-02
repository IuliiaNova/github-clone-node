const db = require('../models')
const seed = require('./index')

async function seedUser(){
  await handleSeed(seed.getBaseUser, db.User)
}

async function seedRepos(){
  await handleSeed(seed.getBaseRepos, db.Repo)
}

const handleSeed = async (getBase, Model) => {
  const seeder = await getBase();
  await Model.deleteMany({})
  await Model.create([...seeder])
}

module.exports = {
  seedUser,
  seedRepos
}