import tipsDB from "../database/tips-database.js";

let id = 0;

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

export default Dicas;
