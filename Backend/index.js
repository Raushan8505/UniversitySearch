const express = require("express");
const { University } = require("./Schemas/university");
const { sequelize } = require("./Schemas/index");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/university", async (req, res) => {
  const { country, name, state_province, web_pages } = req.body;
  const data = await University.create({ country, name, state_province, web_pages });
  res.status(200).send({ msg: "Data Added", data: data });
});

app.get("/university", async (req, res) => {
  const data = await University.findAll();
  res.status(200).send({ data });
});

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});