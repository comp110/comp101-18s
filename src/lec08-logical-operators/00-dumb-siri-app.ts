import { print, promptBoolean } from "introcs";

export let main = async () => {

    print("Welcome to COMP101 Siri");

    // prompt the user to see if it is raining
    let isRaining: boolean = await promptBoolean("Is it raining today?");

    // prompt the user to see if it is cold
    let isCold: boolean = await promptBoolean("Is it cold outside today?");

    // TODO: if it is cold and raining, tell the user they need a jacket and an umbrella
    // if it is only cold, tell the user to wear a jacket
    // if it is only raining tell the user to bring an umbrella
    // if it is neither cold nor raining tell the user the weather is nice

};

main();