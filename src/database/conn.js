import mongoose from "mongoose";

const mongoDB ="mongodb+srv://kaykeharmann:kayke290616@cluster0.lm7gq.mongodb.net/"

const database = "lionsbet";

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB + process.env.DATABASE);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;