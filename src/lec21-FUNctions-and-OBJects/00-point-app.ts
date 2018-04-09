import { print } from "introcs";

class Point {
    x: number = 0;
    y: number = 0;
}

export let main = async () => {
    // TODO: Part 1: Create 2 points and pass them to your midpoint function to test

    // Create array to test the equals function
    let points: Point[] = [];
    for (let i: number = 0; i < 5; i++) {
        points[i] = new Point();
        points[i].x = i;
        points[i].y = i + 1;
    }
    // TODO Part 2: Test your equals function using the points array created
    // above and another point of your choosing

};

// TODO: Part 1: Implement the midpoint function

// TODO: Part 2: Implement the equals function

main();