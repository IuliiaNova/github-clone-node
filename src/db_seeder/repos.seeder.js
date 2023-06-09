const { ObjectId } = require('bson')
const db = require('../models')

async function getBaseRepos() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id)

  const baseRepos = [
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "git-storm-react",
      visibility: "public",
      language: "TypeScript",
      createdAt: "2023-06-02T09:52:47.221+00:00",
      updated_at: "2023-06-02T09:52:47.221+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "gif-storm-node",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2023-05-02T09:53:59.940+00:00",
      updated_at: "2023-05-02T09:53:59.940+00:00"
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "audity_react_app",
      visibility: "public",
      language: "TypeScript",
      createdAt: "2023-04-02T09:54:41.551+00:00",
      updated_at: "2023-04-02T09:54:41.551+00:00"
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "audity_node_app",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2023-06-02T07:55:04.972+00:00",
      updated_at: "2023-06-02T07:55:04.972+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "todo-react",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2023-06-02T09:55:33.235+00:00",
      updated_at: "2023-06-02T09:55:33.235+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "todo-node",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2022-06-02T09:55:46.187+00:00",
      updated_at: "2022-06-02T09:55:46.187+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "job-barcelona23-backend",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2023-06-02T09:56:59.191+00:00",
      updated_at: "2023-06-02T09:56:59.191+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "e-commerce",
      visibility: "public",
      language: "JavaScript",
      createdAt: "2023-06-02T09:57:12.203+00:00",
      updated_at: "2023-06-02T09:57:12.203+00:00",
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "crypto-domain-project-in-php",
      visibility: "public",
      language: "PHP ",
      createdAt: "2023-01-02T09:57:40.657+00:00",
      updated_at: "2023-01-02T09:57:40.657+00:00"
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "codewars",
      visibility: "private",
      language: "JavaScript",
      createdAt: "2023-06-02T09:58:14.476+00:00",
      updated_at: "2023-06-02T09:58:14.476+00:00"
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "oop-basics",
      visibility: "private",
      language: "PHP",
      createdAt: "2022-12-02T09:58:28.549+00:00",
      updated_at: "2022-12-02T09:58:28.549+00:00"
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "mysql-basics",
      visibility: "private",
      language: "SQL",
      createdAt: "2023-06-02T09:59:08.122+00:00",
      updated_at: "2023-06-02T09:59:08.122+00:00"
    }]
  return baseRepos
}

module.exports = {
  getBaseRepos
}