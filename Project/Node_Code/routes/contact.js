var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var axios = require("axios");

const JSON = require("circular-json");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.post("/done", function(req, res, next) {
  var newtx = req.body.newtx;
  console.log("===========================",req.body)
  console.log(newtx);
  axios({
    method: "post",
    url: "https://api.blockcypher.com/v1/btc/test3/txs/new",
    data: JSON.stringify(newtx)
  })
    .then(function(response) {
      const json = JSON.stringify(response);
      res.send(json);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
