const createTip = (app) => {
  app.post("/create", (req, res) => {
    res.send("Rota POST para usuario");
  });

  app.get("/tip", (req, res) => {
    res.send("Rota POST para usuario");
  });
};

export default createTip;
