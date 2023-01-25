const path = require("path");
const express = require("express");
const ejs = require("ejs");
const listOfProducts = require("../public/catalog-object");
const { response } = require("express");

const app = express();

app.use(express.urlencoded());

const PORT = process.env.PORT || 3030;

const publickDirrectoryPath = path.join(__dirname, "../public");
app.use(express.static(publickDirrectoryPath));

app.set("views", path.join(__dirname, "../public/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new-order", (req, res) => {
  res.render("new-order", {
    barcode: false,
    item: false,
    image: false,
    description: false,
    maufacturer: false,
  });
});

app.post("/new-order", (req, res) => {
  ({ barcode, item, image, description, maufacturer } = listOfProducts[0]);

  let search = req.body;
  console.log(search);

  try {
    if (search === barcode) {
      res.render("new-order", {
        barcode,
        item,
        image,
        description,
        maufacturer,
      });
    } else {
      res.render("new-order", {
        barcode: false,
        item: false,
        image: false,
        description: false,
        maufacturer: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("*", (req, res) => {
  res.send(`<h1>Not Found 404</h1>`);
});

app.listen(PORT, () => {
  console.log(`server index.js is runnig on port ${PORT}`);
});
