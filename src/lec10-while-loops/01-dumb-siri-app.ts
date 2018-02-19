import { print, promptString } from "introcs";

let main = async () => {
    let choice = "";
    while (choice !== "quit") {
        choice = await promptString("What do you want to do?");
    }
    print("Quitting");
};

main();