const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const adminRouter = require("./routes/adminRoutes");
const bodyParser = require("body-parser");
// const checkRole = require("./middleware/userRole");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// app.get("/admin", checkRole("admin"),(req,res )=>{
//   res.status(200).send("Welcome Admin");
// })
// app.get("/customer", checkRole("customer"),(req,res )=>{
//   res.status(200).send("Welcome User");
// })

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
