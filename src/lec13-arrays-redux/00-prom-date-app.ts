import { print } from "introcs";
import { classRoster, lockers } from "./prom-date-helper";

export let main = async () => {


    // lockerNumber will hold the locker number of our prom date
    let lockerNumber: number = -1;

    // PART 1
    // 0. Initialize this variable with the name you are searching for (Nathan or Helen)
    let promDate = "";
    // 1. Write a while loop that goes through each element in the array
    // 2. If the element at a given index is equal to the name you are searching for, store that index in lockerNumber
    let i: number = 0;


    // 3. Print the lockerNumber, as well as the name at that index in the classRoster array
    print(lockerNumber);
    print(classRoster[lockerNumber]);

    // PART 2
    // Use the lockerNumber found in Part 1 as an index for the lockers string array
    // 1. First, print out any notes contained in your lovers locker

    // 2. Assign the element at index lockerNumber in the lockers array to a new string value (your note asking them to prom)

    // 3. Print out the notes in your lovers locker again to make sure your note was saved


};

main();