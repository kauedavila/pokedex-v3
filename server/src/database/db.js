const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando ao database...");
  mongoose
    .connect(
      "mongodb+srv://kaue:tZemco1rIgdz5EWu@cluster0.qmmrahm.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado ao database!"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
