import tipsDB from "../database/tips-database.js";

class Dicas {
  constructor(id, dica) {
    this.id = id++;
    this.dica = dica;
  }
  insereDica = (dica) => {
    tipsDB.dica.push(dica);
  };

  pegaDica = () => {
    const randomTip = Math.floor(Math.random() * (tipsDB.length + 1));
    return randomTip;
  };
}
