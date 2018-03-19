import { print, promptNumber } from "introcs";

export let main = async () => {
    while (true) {
        let x: number = await promptNumber("Give me a number, I'll tell you if it's even or odd...");

        print("It is...");
        
        let oddness: string = "?";
        
        // TODO #1

        print(oddness);
    }
};

let evenOrOdd = (n: number): string => {
    
    print("~~~ evenOrOdd called ~~~");

    // TODO #2
    return "idk";

};

main();