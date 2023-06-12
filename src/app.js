const express = require("express"); //url transation
const path = require("path");//local path configure 
const hbs = require("hbs");//dynamic html
const bodyParser = require("body-parser");// client server communication module
require("dotenv").config();// hidden variable

const app = express();//instance class
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");//local non dynamic  files
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");// parts of html

app.use(express.json());//server communication lang
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({ extended: true }));//utf8 encoding

app.set("view engine", "hbs");//brower engine reset for hbs instaed of html
app.set("views", templates_path);

hbs.registerPartials(partials_path);

const userRouter = require("./routers/user");

app.use(userRouter);

app.listen(port, () => {
  console.log(`Listning to server on port ${port}`);
});
