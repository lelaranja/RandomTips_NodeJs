import express from "express";
import createTip from "./controllers/createTip.js";

const app = express();
const port = 8080;

app.use(express.json());

createTip(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
