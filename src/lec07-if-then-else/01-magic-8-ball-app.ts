import { print, promptString, random } from "introcs";

export let main = async () => {

    print("Welcome to the Magic 8 Ball");

    let question: string = await promptString("What is your question?");

    let choice: number = random(0, 1);

    // TODO #1: Implement an if-else

};

main();