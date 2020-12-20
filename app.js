var express = require("express"),
  app = express(),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser")
// findOrCreate = require('mongoose-findorcreate')

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride("_method"))

var indexRoutes = require("./routes/index")
app.use("/", indexRoutes)

// Server http://localhost:3000/
app.listen(process.env.PORT || 3000, function () {
  console.log("app is running...")
})