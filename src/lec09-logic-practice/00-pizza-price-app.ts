import { print, promptNumber, promptString, promptBoolean } from "introcs";

export let main = async () => {
    print("Pizza Price Calculator");
 
    let price: number = 0.0;

    let size: string = await promptString("What size? small, medium, large");
    
    // TODO #1

    // TODO #2
    
    // TODO #3
  
    print("The pizza price is " + price);
};

main();