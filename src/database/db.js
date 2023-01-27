const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando ao database...");
  mongoose
    .connect(
      "mongodb+srv://kaue:Pv9BGHdjALz4RETa@cluster0.qmmrahm.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado ao database!"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
