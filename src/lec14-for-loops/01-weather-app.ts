import { print } from "introcs";
import { precipitation, dailyHighs, dailyLows } from "./weather-helper";

export let main = async () => {

    // Part 1: Compute the total rainfall for Spring 2017

    let sum: number = 0;
    // TODO: Compute sum

    print("Total rainfall for Spring 2017 was: " + sum);

    // ------------------------------- //

    // Part 2: Compute the highest temperature recorded for Spring 2017

    let maxTemp = 0;
    // TODO: Find max

    print("The highest temperature in Spring 2017 was: " + maxTemp);

    // ------------------------------- //

    // Part 3: Compute the average low temperature
    
    let averageLowTemp = 0;
    // TODO: Find average low

    print("The average daily low temperature in Spring 2017 was: " + averageLowTemp);

};

main();