var express = require("express")
var router = express.Router()

router.get("/", function (req, res) {
    res.render("Home")
});

router.get("/slc-2021", function (req, res) {
    res.render("SLC-2021")
});

router.get("/slc-2022", function (req, res) {
    res.render("SLC-2022")
});

router.get("/prev-editions", function (req, res) {
    res.render("Previous-Editions")
});

router.get("/gallery", function (req, res) {
    res.render("Gallery")
});

router.get("/team", function (req, res) {
    res.render("Team")
});

router.get("/sod/slc-2018", function (req, res) {
    res.render("SODs/SLC-2018")
});

router.get("/sod/slc-2019", function (req, res) {
    res.render("SODs/SLC-2019")
});

router.get("/sod/slc-2020", function (req, res) {
    res.render("SODs/SLC-2020")
});

router.get("/sod/slc-2021", function (req, res) {
    res.render("SODs/SLC-2021")
})

module.exports = router