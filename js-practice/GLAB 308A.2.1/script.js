// Part 1: 

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// console.log(adventurer.inventory[0])

// adventurer.inventory.forEach(item => {
//     console.log(item)
// });

// adventurer.roll();

// Part Two:

// character (name, health (max 100), inventory)

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        //console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
    static MAX_HEALTH = 100;
}

// const robin = new Character("Robin")
// robin.inventory = ["sword", "potion", "artifact"]
// robin.companion = new Character("Leo")
// robin.companion.type = "Cat"
// robin.companion.companion = new Character("Frank")
// robin.companion.companion.type = "Flea"
// robin.companion.companion.inventory = ["small hat", "sunglasses"]

//robin.roll();
//robin.companion.roll();
//robin.companion.companion.roll();

// Part Three: 

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
            this.role = role
        } else {
            this.role = "Fighter";
        }
        this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`)
        super.roll();
    }
    duel (Adventurer) {
        try {
            while (this.health > 50 && Adventurer.health > 50) {
                let myRoll = super.roll();
                let theirRoll = Adventurer.roll();
                // subtract 1 from adventurer with lower roll
                if (myRoll > theirRoll) {
                    // they lose 1 health
                    Adventurer.health--;
                } else if (theirRoll > myRoll) {
                    // I lose 1 health
                    this.health--;
                }
                // log results w/ rolls and current health
                console.log(`${this.name} rolled a ${myRoll} and has ${this.health} HP. ${Adventurer.name} rolled a ${theirRoll} and has ${Adventurer.health} HP.`)
                // log winner of duel 
                if (this.health <= 50) {
                    // return their name
                    console.log(`${Adventurer.name} won!`)
                } else if (Adventurer.health <= 50) {
                    // return my name
                    console.log(`${this.name} won!`)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    static ROLES = ["Fighter", "Healer", "Wizard"];
}

const theo = new Adventurer("Theo", "Healer")
const abe = new Adventurer("Abe", "Fighter")
theo.duel(abe);
// theo.scout();
// theo.roll();

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

// const robin = new Adventurer("Robin", "Wizard")
// robin.inventory = ["sword", "potion", "artifact"]
// robin.companion = new Companion("Leo", "Cat")
// robin.companion.companion = new Companion("Frank", "Flea")
// robin.companion.companion.inventory = ["small hat", "sunglasses"]

// robin.scout();
// console.log(`My name is ${robin.name}. My companion is ${robin.companion.name}. Their companion is ${robin.companion.companion.name}.`)

// Part Four:
// added MAX_HEALTH & ROLES, and checkRole()

// console.log(Companion.MAX_HEALTH);
//console.log(robin)

// Part Five:

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

// Part Six:
