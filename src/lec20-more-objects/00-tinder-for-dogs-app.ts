import { csvToArray, print, image, promptString } from "introcs";

class Pet {
    name: string = "";
    gender: string = "";
    distance: number = 0;
    size: string = "";
    houseTrained: boolean = false;
    age: number = 0;
    url: string = "";
}

let main = async () => {
    // TODO: Part 0 - Read in the pet data

    // TODO: Part 2 - Swipe loop

};

// TODO: Part 1.1 - Filter pets who are closer than 20 miles away
let filterLessThan20Miles = (pets: Pet[]): Pet[] => {
    let lessThan20Miles: Pet[] = [];

    return lessThan20Miles;    
};

// TODO: Part 1.2 - Filter pets who are house trained
let filterByHouseTrained = (pets: Pet[]): Pet[] => {
    let areHouseTrained: Pet[] = [];

    return areHouseTrained;
};

// TODO: Part 3 - Print matches
let printMatches = (pets: Pet[]): string => {
    return "";
};

main();