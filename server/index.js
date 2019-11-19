const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "../dist")));

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
