import Dicas from "../model/tips-model.js";

const createTip = (app) => {
  app.get("/tip", (req, res) => {
    const dica = new Dicas();
    res.json({ dica: dica.pegaDica() });
  });
};

app.post("/create", (req, res) => {
  const body = req.body;

  const dica = new Dicas(body.id, body.dica);
  dica.insereDica(dica);

  res.json({ msg: "Dica inserida com sucesso", dica: dica });
});

export default createTip;
