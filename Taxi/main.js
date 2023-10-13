class Personnage {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
}

const musics = ["Anissa", "Reine", "Life", "Copine", "Egerie"];

let feuRouge = 30;
let John = new Personnage("John", 10);
let taxi = 0;
while (John.hp >= 0 && feuRouge >= 0) {
  feuRouge -= 1;
  let random = Math.floor(Math.random() * musics.length);
  let music = musics[random];
  if (music == "Anissa") {
    console.log(
      `Mince! La musique jouée est Anissa, il reste ${feuRouge} feux rouges.`
    );
    taxi += 1;
    John.hp -= 1;
  }

  if (music != "Anissa") {
    console.log(
      `Super! La musique jouée est ${music}, il reste ${feuRouge} feux rouges.`
    );
  }

  if (feuRouge == 0) {
    console.log(
      `${John.name} est bien arrivé à destination, il lui a fallu ${taxi} changements de taxi pour y arriver.`
    );
    break;
  }
  if (John.hp <= 0) {
    console.log("explosion");
    break;
  }
}
