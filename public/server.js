const express = require("express");
const app = express();
var compression = require('compression')
const draw = require("./draw.js");
app.use(compression())
const path = __dirname ;
app.use(express.static(path));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.get("/:size/", (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  let size = req.params.size.match(/\d+x\d+/i) + '';
  let width = (size != "null") ? parseInt(size.split("x")[0]) : 500;
  let height = (size != "null") ? parseInt(size.split("x")[1]) : 500;

  let options = {
    width: width,
    height: height,
    bgColor : (req.query.bgColor) ? ('#' + req.query.bgColor) : "white",
    text : (req.query.text) ? req.query.text :"",
    color : (req.query.color) ? ('#' + req.query.color) : "black",
    font : (req.query.font) ? req.query.font : "bold "+width/15+"pt Menlo",      
  };
  
  draw(options).pngStream().pipe(res);

});


app.get('*', function (req,res) {
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});