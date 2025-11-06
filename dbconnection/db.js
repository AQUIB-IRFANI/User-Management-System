const { mongoose } = require("mongoose");

const conMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://user-management-system:Aquib@92@user-management-system.qhi8uzz.mongodb.net/?appName=User-Management-System");
    console.log('connected');
  } catch (error) {
    console.log(error);
  }

}
module.exports = conMongoDB;