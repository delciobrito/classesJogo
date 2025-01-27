class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack = "";
    if (this.type === "Mago") {
      attack = "magia";
    } else if (this.type === "Guerreiro") {
      attack = "espada";
    } else if (this.type === "Monge") {
      attack = "artes marciais";
    } else if (this.type === "Ninja") {
      attack = "shuriken";
    }

    console.log(`O ${this.type} atacou usando ${attack}.`);
  }
}

const heros = ['Mago', 'Guerreiro', 'Monge', 'Ninja']

for(let i = 0; i < heros.length; i++) {
    let hero = heros[i]
    
    hero = new Hero(hero, 60, hero) 
    hero.attack()
}

