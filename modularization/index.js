const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
        console.log(`Tiger Power: ${tiger.strength}`);
        console.log(`Wolf Power: ${wolf.strength}`);
        tiger.growl();
        return;
    }
    
    if(wolf.strength > tiger.strength) {
        console.log(`Tiger Power: ${tiger.strength}`);
        console.log(`Wolf Power: ${wolf.strength}`);
        wolf.growl();
        return;
    }

    console.log('Draw. Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);