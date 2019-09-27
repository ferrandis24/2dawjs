let sides = (20);
let firstRace = "";
while (firstRace != "human" && firstRace != "elven" && firstRace != "dwarf" && firstRace != "mage") {
    firstRace = prompt("Elije raza del primer contrincante entre: human, elven, dwarf, mage");
}
alert("Has elegido "+firstRace);
let secondRace = "";
while (secondRace != "human" && secondRace != "elven" && secondRace != "dwarf" && secondRace != "mage") {
    secondRace = prompt("Elije raza del segundo contrincante entre: human, elven, dwarf, mage");
}
alert("Has elegido "+secondRace);

let firstCharacterStats = createRPGCharacter(firstRace);
let secondCharacterStats = createRPGCharacter(secondRace);

function diceThrow(sides) {
    let x = Math.random();
    x = (x * sides) + 1;
    return Math.floor(x);
}

function createRPGCharacter(race) {
    let str = 0;
    let spd = 0;
    let vit = 0;
    let dex = 0;
    let mag = 0;
    let stats = [];
    if (race == "human") {
        str = 8 + diceThrow(6) + diceThrow(6);
        spd = 4 + diceThrow(6);
        vit = diceThrow(20);
        dex = diceThrow(20);
        mag = 1 + diceThrow(10);
        stats.push(str,spd,vit,dex,mag);
        console.log(race,stats);
        return stats
    }
    else if (race == "elven") {
        str = 6 + diceThrow(4) + diceThrow(4);
        spd = diceThrow(20);
        vit = diceThrow(12);
        dex = 3 + diceThrow(10) + diceThrow(10);
        mag = diceThrow(20);
        stats.push(str,spd,vit,dex,mag);
        console.log(race,stats);
        return stats;
    }
    else if (race == "dwarf") {
        str = 10 + diceThrow(10);
        spd = diceThrow(8) + diceThrow(8);
        vit = 10 + diceThrow(8);
        dex = diceThrow(20);
        mag = diceThrow(8);
        stats.push(str,spd,vit,dex,mag);
        console.log(race,stats);
        return stats;
    }
    else {
        str = diceThrow(6);
        spd = 4;
        vit = diceThrow(10);
        dex = diceThrow(20);
        mag = 12 + diceThrow(8);
        stats.push(str,spd,vit,dex,mag);
        console.log(race,stats);
        return stats;
    }
}

function getDamage(race,stats) {
    let damage = 0;
    if (race == "human") {
        damage = 1.5 * stats[0]  + 0.4 * stats[3];
        return Math.ceil(damage);
    }
    if (race == "elven") {
        damage = stats[0] + 1.2 * stats[3] + 0.1 * stats[4];
        return Math.ceil(damage);
    }
    if (race == "dwarf") {
        damage = 2 * stats[0];
        return Math.ceil(damage);
    }
    if (race == "mage") {
        damage = 2 * stats[4] + 0.1 * stats[2];
        return Math.ceil(damage);
    }
}

function getDefense(race,stats) {
    let defense = 0;
    if (race == "human") {
        defense = stats[2] + 0.2 * stats[1];
        return Math.ceil(defense);
    }
    if (race == "elven") {
        defense = 1.3 * stats[1] + 0.5 * stats[3];
        return Math.ceil(defense);
    }
    if (race == "dwarf") {
        defense = 1.1 * stats[3] + 1.1 * stats[0];
        return Math.ceil(defense);
    }
    if (race == "mage") {
        defense = 0.8 * stats[4] + 0.3 * stats[1];
        return Math.ceil(defense);
    }
}


function getHealthPoints(race,stats) {
    let hp = 0;
    if (race == "human") {
        hp = stats[0] + stats[2] + 10;
        return hp;
    }
    if (race == "elven") {
        hp = stats[0] + stats[3] + 5;
        return hp;
    }
    if (race == "dwarf") {
        hp = stats[0] + stats[2] + 15;
        return hp;
    }
    if (race == "mage") {
        hp = stats[4] + stats[2] + 3;
        return hp;
    }
}


function simulateBattle(firstRace,firstCharacterStats,secondRace,secondCharacterStats) {
    let vida1 = getHealthPoints(firstRace,firstCharacterStats);
    let vida2 = getHealthPoints(secondRace,secondCharacterStats);
    let damage = 0;
    let defense = 0;
    let damageOG = 0;
    if (firstCharacterStats[1] <= secondCharacterStats[1]) {
        while (vida1 >= 1 && vida2 >= 1) {
            damage = getDamage(secondRace,secondCharacterStats);
            defense = getDefense(firstRace,firstCharacterStats);
            damageOG = damage - defense;
            console.log("Vida del primer personaje: "+vida1+" Defensa del primer personaje: "+defense);
            console.log("Vida del segundo personaje: "+vida2+" Daño del segundo personaje: "+damage);
            if (defense < damage) {
                vida1 -= damageOG;
                console.log("Daño directo: "+damageOG);
            } else { 
                console.log("La defensa redujo a 1 el daño");
                damageOG = 1;
                vida1 -= damageOG;
            }
            console.log("Vida del primer personaje: "+vida1);
            if (vida1 >= 1) {
            damage = getDamage(firstRace,firstCharacterStats)
            defense = getDefense(secondRace,secondCharacterStats);
            damageOG = damage - defense;
            console.log("Vida del segundo personaje: "+vida2+" Defensa del segundo personaje: "+defense);
            console.log("Vida del primer personaje: "+vida1+" Daño del primer personaje: "+damage);
            if (defense < damage) {
                vida2 -= damageOG;
                console.log("Daño directo: "+damageOG);
            } else { 
                console.log("La defensa redujo a 1 el daño");
                damageOG = 1;
                vida2 -= damageOG;
            }
            console.log("Vida del segundo personaje: "+vida2);
            }
        }
        if (vida1 >= 1) {
            console.log("Ha ganado el primer personaje");
        } else console.log("Ha ganado el segundo personaje");
    }
    else if (firstCharacterStats[1] > secondCharacterStats[1]) {
        while (vida1 >= 1 && vida2 >= 1) {
            damage = getDamage(firstRace,firstCharacterStats);
            defense = getDefense(secondRace,secondCharacterStats);
            damageOG = damage - defense;
            console.log("Vida del segundo personaje: "+vida2+" Defensa del segundo personaje: "+defense);
            console.log("Vida del primer personaje: "+vida1+" Daño del primer personaje: "+damage);
            if (defense < damage) {
                vida2 -= damageOG;
                console.log("Daño directo: "+damageOG);
            } else { 
                console.log("La defensa redujo a 1 el daño");
                damageOG = 1;
                vida2 -= damageOG;
            }
            console.log("Vida del segundo personaje: "+vida2);
            if (vida2 >= 1) {
            damage = getDamage(secondRace,secondCharacterStats);
            defense = getDefense(firstRace,firstCharacterStats);
            damageOG = damage - defense;
            console.log("Vida del segundo personaje: "+vida2+" Defensa del segundo personaje: "+defense);
            console.log("Vida del primer personaje: "+vida1+" Daño del primer personaje: "+damage);
            if (defense < damage) {
                vida1 -= damageOG;
                console.log("Daño directo: "+damageOG);
            } else { 
                console.log("La defensa redujo a 1 el daño");
                damageOG = 1;
                vida1 -= damageOG;
            }
            console.log("Vida del segundo personaje: "+vida2);
            }
        }
        if (vida1 > 1) {
            console.log("Ha ganado el primer personaje");
        } else console.log("Ha ganado el segundo personaje");
    }
}
simulateBattle(firstRace,firstCharacterStats,secondRace,secondCharacterStats);
