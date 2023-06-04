const db = require("../models")

async function postRepo(req, res, next) {
  const { userId, name, visibility, language } = req.body;

  if (!name || !visibility || !language ) {
    return res.status(400).send({ message: "Missing required field" });
  }

  const repo = new db.Repo({
    userId, 
    name, 
    visibility, 
    language
  });

  try {
    const repoSaved = await repo.save();
    if (!repoSaved) {
      return res.status(400).send({ status: 400 });
    }
    await db.User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { repos: repoSaved._id } }
    )
    return res.status(200).send({ status: 200, repo: repoSaved });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}

async function getRepos(req, res, next) {
  try {
    const repoStored = await db.Repo.find().lean().exec();
    if (!repoStored) {
      return res.status(400).send({ status: 400 });
    }
    return res.status(200).send({ status: 200, repo: repoStored });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}

async function getRepoById(req, res, next) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ status: 404 });
  }
  try {
    const repoStored = await db.Repo.findById({ _id: id }).lean().exec();
    if (!repoStored) {
      return res.status(400).send({ status: 400 });
    }
    return res.status(200).send({ status: 200, repo: repoStored });
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}

async function deleteRepoById(req, res, next) {
  const { id } = req.params;
  const { userId } = req.body
  if (!id) {
    return res.status(400).send({ status: 404 });
  }
  try {
    const repoStored = await db.Repo.findByIdAndDelete({ _id: id }).lean().exec();
    if (!repoStored) {
      return res.status(400).send({ status: 400 });
    }

    await db.User.findOneAndUpdate(
      { _id: userId },
      { $pull: { repos: repoStored._id } }
    )
    return res.status(200).send({ status: 200});
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}

async function updateRepo(req, res, next) {
  const { id } = req.params;
  const { name, visibility, language } = req.body
  if (!id) {
    return res.status(400).send({ status: 404 });
  }
  try {
    const repoStored = await db.Repo.findByIdAndUpdate(
      { _id: id },
      {name, visibility, language}).lean().exec();

    if (!repoStored) {
      return res.status(400).send({ status: 400 });
    }

    return res.status(200).send({ status: 200, repo: repoStored});
  } catch (err) {
    return res.status(500).send({ status: 500, error: err });
  }
}




async function searchRepo(req, res) {
	const { query } = req.params

	if (query.length < 2) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const queryRegex = new RegExp(`${query}`, 'i')
		const repo = await db.Repo.find({ name: queryRegex }).lean().exec();
		
		if (!repo) {
			return res.status(400).send({ status: 400 })
		}

		const repoArray = content.map(item => ({
      _id: item._id,
      name: item.name,
      visibility: item.visibility,
			language: item.language
    }))

		return res.status(200).send({
			status: 200,
			content:  repoArray
		})
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}


module.exports = {
  postRepo,
  getRepos,
  getRepoById,
  updateRepo,
  deleteRepoById,
  searchRepo
}