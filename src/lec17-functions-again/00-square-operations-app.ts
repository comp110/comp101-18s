import { print } from "introcs";

export let main = async () => {
    // Calling our perimeter function
    let squarePerimeter: number = perimeter(5);
    print(squarePerimeter);

    // TODO: Call the area function once you have definied it and pass 5 as an argument. Print the result

};

let perimeter = (length: number): number => {
    let result: number = length * 4;
    return result;
};

// TODO: Define a function named area that has a single parameter of type number named length
//       It should return a number which is the area of the square having a side of that length



main();