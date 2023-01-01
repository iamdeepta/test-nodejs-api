const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("./routes/users");

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = 8000;

mongoose.set("strictQuery", false);

main()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//middleware
app.use("/api/users", Users);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
