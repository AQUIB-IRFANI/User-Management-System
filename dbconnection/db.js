const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch(err => console.log(err));
};

module.exports = connectMongo;
