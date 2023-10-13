class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck

    }
    isLucky(){
        return Math.floor(Math.random() * 100) <= this.luck
    }
    attackPokemon(pokemon){
        if (this.isLucky()){
            let damages = this.attack - pokemon.defense
            pokemon.hp -= damages
            console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damage}`)
        }else{
            console.log(`${this.name} a raté son attaque`)
        }
    }
}



let pickachu = new Pokemon ("pickachu" , 10, 5, 30, 75)
let evoli = new Pokemon ("evoli" , 15, 3, 30, 50)


while (pickachu.hp > 0 && evoli.hp > 0) {
  pickachu.attackPokemon(evoli);

  if (evoli.hp <= 0) {
    console.log("evoli a perdu le combat, il est K.O");
    break;
  }
  evoli.attackPokemon(pickachu);

  if (pickachu.hp <= 0) {
    console.log("pickachu a perdu le combat, il est K.O");
    break;
  }
}
console.log("Le combat est terminé");





