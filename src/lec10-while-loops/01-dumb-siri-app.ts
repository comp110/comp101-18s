import { print, promptString } from "introcs";

let main = async () => {
    let choice = "";
    while (choice !== "quit") {
        choice = await promptString("What can I help you with?");
    }
    print("Quitting");
};
main();