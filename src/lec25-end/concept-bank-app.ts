import { print, promptNumber, promptString, random } from "introcs";



export let main = async () => {
    let concepts: string[] = [];
    let conceptNumber: number = await promptNumber("How many concepts would you like to review?");
    let i: number = 0;
    while (i < conceptNumber) {
        // Hands-On: Part 2 - Collect the concepts
        // TODO: Ask the user for a concept (as a string). Check for duplicates
        let concept: string = await promptString("Enter a concept");
        if (!isADuplicate(concepts, concept)) {
            concepts[concepts.length] = concept;
            i++;
        } else {
            print("Error, try again");
        }
    }

    let relateCount: number = await promptNumber("How many concepts do you want to relate?");
    while (true) {
        print("Try to relate these concepts: ");
        let relatingConcepts: string[] = [];
        let j: number = 0;
        while (j < relateCount) {
            let concept: string = getConcept(concepts);
            if (!isADuplicate(relatingConcepts, concept)) {
                relatingConcepts[relatingConcepts.length] = concept;
                j++;
            }
        }
        print(relatingConcepts);
        let choice: string = await promptString("Exit?");
        if (choice === "yes") {
            return;
        }
    }
};

// TODO: Define your functions here
// Hands-On: Part 1 - isADuplicate Function
let isADuplicate = (arr: string[], item: string): boolean => {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
};

// Hands-On: Part 3 - getConcept Function
let getConcept = (concepts: string[]): string => {
    let randomNum: number = random(0, concepts.length);
    return concepts[randomNum];
};

main();