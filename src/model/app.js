import express from "express";
import createTip from "./controller/createTip";
import receiveTip from "./controller/tip";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

createTip();
receiveTip();
