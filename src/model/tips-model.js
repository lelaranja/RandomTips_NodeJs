import tipsDB from "../database/tips-database.js";

class Dicas {
  constructor(id, dica) {
    this.id = id;
    this.dica = dica;
  }
  insereDica = (dica) => {
    tipsDB.push(dica);
  };

  pegaDica = () => {
    const randomTip = tipsDB[Math.floor(Math.random() * tipsDB.length)];
    return randomTip;
  };
}

export default Dicas;
