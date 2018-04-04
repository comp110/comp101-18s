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
    let pets: Pet[] = await csvToArray("Pets", Pet);
    let filtered: Pet[] = filterLessThan20Miles(filterByHouseTrained(pets));
    let swipedRight: Pet[] = [];
    for (let i: number = 0; i < filtered.length; i++) {
        image(filtered[i].url);
        let choice: string = await promptString("left or right");
        if (choice === "right") {
            swipedRight[swipedRight.length] = filtered[i];
        }
    }
    let status: string = printMatches(swipedRight);
    print(status);
};

let filterByHouseTrained = (pets: Pet[]): Pet[] => {
    return pets.filter((pet) => pet.houseTrained);
};

let filterLessThan20Miles = (pets: Pet[]): Pet[] => {
    let lessThan20Miles: Pet[] = [];
    for (let i: number = 0; i < pets.length; i++) {
        if (pets[i].distance < 20) {
            lessThan20Miles[lessThan20Miles.length] = pets[i];
        }
    }
    return lessThan20Miles;    
};

let printMatches = (pets: Pet[]): string => {
    for (let i: number = 0; i < pets.length; i++) {
        print(pets[i].name + " is " + pets[i].distance + " miles away");
        image(pets[i].url);
    }
    return pets.length > 0 ? "success" : "failure :(";
};

main();