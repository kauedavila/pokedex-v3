const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    res.status(400).send({
      message: "Preencha todos os campos",
      messageEN: "Fill in all fields",
    });
  }

  const user = await userService.create(req.body);

  if (!user) {
    res.status(400).send({
      message: "Erro ao criar usuário",
      messageEN: "Error creating user",
    });
  }

  res.status(201).send({
    message: "Usuário criado com sucesso",
    messageEN: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
    },
  });
};

module.exports = {
  create,
};
