import tipsDB from "../../tips-database.js";

const createTip = (app, db) => {
  app.post("/create", (req, res) => {
    let x = req.body;
    console.log(x);
    db.push(x);
    res.send("Dica inserida com sucesso");
  });

  app.get("/tip", (req, res) => {
    let randomTip = Math.floor(Math.random() * tipsDB.length);
    console.log(tipsDB[randomTip]);
    res.send(db);
  });
};

export default createTip;
