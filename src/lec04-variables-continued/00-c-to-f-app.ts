import { print, promptNumber } from "introcs";

export let main = async () => {

    print("C to F calculator");

    // Declare a variable to store degrees celsius
    let celsius: number;
    
    // Prompt the user for degrees celsius and assign to variable
    celsius = await promptNumber("Degrees celsius:");
    
    // Declare a variable to store degrees farenheit
    let farenheit: number;

    // TODO: Rather than initialize farenheit to 0 below,
    // compute the actual conversion.
    farenheit = 0;
    
    // Display the result of the computation
    print("Converts to:");
    print(farenheit);
    print("farenheit");

};

main();