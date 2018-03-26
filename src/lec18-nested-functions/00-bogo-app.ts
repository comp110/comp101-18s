import { print, promptNumber } from "introcs";

export let main = async () => {

    print("Spicy9 BOGO Calculator");

    let roll0: number = await promptNumber("Roll 0 $");
    let roll1: number = await promptNumber("Roll 1 $");

    // Notice we are calling max with the values of roll0 and roll1
    // Uncomment the lines below once you have defined your max function

    let cost: number = max(roll0, roll1);
    print("The BOGO cost is...");
    print(cost);

};

// TODO: Write max function, has 2 parameters both of type number and returns a number
let max = (a: number, b: number): number => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

// Part 2: Follow along, write a function called max3 that computes the max of 3 values

main();