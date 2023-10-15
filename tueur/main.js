// creation class Personnage.

class Personnage {
  constructor(name, caract) {
    this.name = name;
    this.caract = caract;
  }
}

// caracteristiques possibles des personnages.

const caractPersonnages = [0.3, 0.5, 0.2];

// noms possibles des personnages.

const nomPersonnages = [
  "nerd",
  "sportif",
  "muslcé",
  "génie",
  "grand",
  "nain",
  "gamer",
  "baka",
];
// creation du tableau des personnages.
let arrayPersonnage = [];

a = 5;
// creation de la boucle for pour créer des personnages aleatoires.
for (let i = 0; i < a; i++) {
  let random1 = Math.floor(Math.random() * caractPersonnages.length);
  let caractPersonnage = caractPersonnages[random1];
  let random = Math.floor(Math.random() * nomPersonnages.length);
  let nomPersonnage = nomPersonnages[random];
  arrayPersonnage.push(
    (personnage = new Personnage(nomPersonnage, caractPersonnage))
  );
}
//creation du tableau des futurs morts.
let morts = [];
// creation class Tueur.
class Tueur {
  constructor(name, hp) {
    (this.name = name), (this.hp = hp);
  }
  // creation de la fonction qui permet l'attaque et la mort des personnages.
  attackPersonnage(personnage) {
    if (personnage.caract == 0.3) {
      console.log(`Jason a esquivé et tué le ${personnage.name}.`);
      morts.push(`${personnage.name}`);
    }

    if (personnage.caract == 0.5) {
      this.hp -= 10;
      console.log(
        `Le ${personnage.name} a infligé 10 points de dégâts à Jason.`
      );
    }
    if (personnage.caract == 0.2) {
      this.hp -= 15;
      console.log(
        `Le ${personnage.name} a infligé 15 points de dégâts à Jason, mais il est mort.`
      );
      morts.push(`${personnage.name}`);
    }
  }
}


let Jason = new Tueur("Jason", 100);
//ordre dans lequel attaque les personnages.
let first = arrayPersonnage[0];
let second = arrayPersonnage[1];
let third = arrayPersonnage[2];
let fourth = arrayPersonnage[3];
let fifth = arrayPersonnage[4];
//creation boucle while pour faire attaquer les personnages et afficher les messages dans la console.
while (Jason.hp > 0) {
  Jason.attackPersonnage(first);
  Jason.attackPersonnage(second);
  Jason.attackPersonnage(third);
  Jason.attackPersonnage(fourth);
  Jason.attackPersonnage(fifth);

  if (Jason.hp <= 0) {
    console.log(
      `Jason est mort, les survivants ont gagné mais R.I.P à ${morts}.`
    );
    break;
  }

  if (morts.length == 5) {
    console.log(
      `Les survivants ${morts} sont morts, Jason a gagné, il lui reste ${Jason.hp} hp.`
    );
    break;
  }
}
