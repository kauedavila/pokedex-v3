const userService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    res.status(400).send({
      message: "Preencha todos os campos",
    });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    res.status(400).send({
      message: "Erro ao criar usuário",
    });
  }

  res.status(201).send({
    message: "Usuário criado com sucesso",
    user: {
      id: user._id,
      name,
      username,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();
  if (users.length === 0) {
    return res.status(404).send({
      message: "Nenhum usuário cadastrado",
    });
  }

  res.send(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "ID inválido",
    });
  }

  const user = await userService.findByIdService(id);
  if (!user) {
    return res.status(404).send({
      message: "Usuário não encontrado",
    });
  }
  res.send(user);
};

module.exports = {
  create,
  findAll,
  findById,
};
