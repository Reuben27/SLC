var express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.use(express.static('/slc/public'));
app.use(express.urlencoded({ extended: true }));
app.set('views', './views');
app.set ("view engine", "ejs");
app.use(express.json());
app.use(methodOverride("_method"))

var indexRoutes = require("./routes/index")
app.use("/slc", indexRoutes)

// Server http://localhost:3000/
app.listen(process.env.PORT || 3000, function () {
  console.log("app is running...")
})