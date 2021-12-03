const express = require("express");
const middle = require("./custom");

const app = express();

app.use(express.json());

app.use(middle);

var collection = [
  {
    id: 1,
    Name: "Aravind",
  },
  {
    id: 2,
    Name: "Akshay",
  },
  {
    id: 3,
    Name: "Ranjan",
  },
  {
    id: 4,
    Name: "Aathimani",
  },
];

app.get("/", (req, res) => {
  res.send(collection);
  res.end();
});

app.get("/:id", (req, res) => {
  var usr = collection.find((x) => x.id == parseInt(req.params.id));
  if (!usr)
    res.status(404).send(`Id ${req.params.id} was not found int the collection`);
  res.send(usr);
  res.end();
});

app.listen(2000, console.log(`Service running on the port 2000`));
