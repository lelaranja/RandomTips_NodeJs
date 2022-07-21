import express from "express";
import createTip from "./controllers/createTip.js";
import tipsDB from "../tips-database.js";

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

createTip(app, tipsDB);
