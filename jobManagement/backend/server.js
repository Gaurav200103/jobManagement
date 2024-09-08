const express = require("express");
const app = express();
const sequelize = require("./utils/db");
const cors = require("cors");
app.use(cors());

const User = require("./models/user.model");
const Job = require("./models/job.model");



const userRouter = require("./routers/user.router");

app.use(express.json());

app.use(userRouter);



sequelize.sync({force:true}).then(()=>{
  app.listen(3000);
  console.log("database connected successfully");
})