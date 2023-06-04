const db = require('../models')

async function postUser(req, res, next) {
  const { name, login, email, avatar } = req.body;

  if (!name || !login || !email) {
    return res.status(400).send({ message: "Missing required field" });
  }

  const user = new db.User({
    id: _id,
    name,
    login,
    email,
    avatar
  });

  try {
    const userSaved = await user.save();
    if (!userSaved) {avatar
      return res.status(400).send({ status: 400 });
    }

    return res.status(200).send({ status: 200, user: userSaved });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}


async function getUser(req, res, next) {
  try {
    const userStored = await db.User.find().lean().exec();
    if (!userStored) {
      return res.status(400).send({ status: 400 });
    }
    return res.status(200).send({ status: 200, user: userStored });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}


module.exports = {
  getUser,
  postUser
}