const Card = require("../models/card");

async function getCards(req, res, next) {
  try {
    const cards = await Card.find({}).populate("owner").sort({ createdAt: -1 });
    if (!cards) {
      const err = new Error("Ocorreu um erro ao buscar cards");
      err.status = 500;
      throw err;
    }
    return res.send({ data: cards });
  } catch (err) {
    return next(err);
  }
}

async function createCard(req, res, next) {
  try {
    const { name, link } = req.body;

    if (!name || !link) {
      return res.status(400).send({ error: "Dados inválidos..." });
    }

    const card = await Card.create({
      name,
      link,
      owner: req.user._id,
    });

    if (!card) {
      const err = new Error("Ocorreu um erro ao criar card");
      err.status = 500;
      throw err;
    }

    return res.send({ data: card });
  } catch (err) {
    return next(err);
  }
}

async function deleteCardById(req, res, next) {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndDelete(cardId);

    if (!card) {
      const err = new Error("Erro ao deletar este card");
      err.status = 400;
      throw err;
    }

    return res.send({ message: "Card deletado com sucesso" });
  } catch (err) {
    return next(err);
  }
}

async function likeCard(req, res, next) {
  try {
    const { cardId } = req.params;
    const userId = req.user._id;

    const card = await Card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: userId } },
      { new: true }
    ).orFail(() => {
      const err = new Error("Card não encontrado");
      err.status = 404;
      throw err;
    });

    return res.send({ data: card });
  } catch (err) {
    return next(err);
  }
}

async function dislikeCard(req, res, next) {
  try {
    const { cardId } = req.params;
    const userId = req.user._id;

    const card = await Card.findByIdAndUpdate(
      cardId,
      { $pull: { likes: userId } },
      { new: true }
    ).orFail(() => {
      const err = new Error("Card não encontrado");
      err.status = 404;
      throw err;
    });

    return res.send({ data: card });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getCards,
  createCard,
  deleteCardById,
  likeCard,
  dislikeCard,
};
