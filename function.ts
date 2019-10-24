/**
 * Here, the ': void' implies that the function
 * does not return anything
 * @param firstName
 * @param lastName 
 */
function greet(firstName: string, lastName: string) : void {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greet('Lukasz', 'Juraszek');

/**
 * Optional parameters are marked by a question mark.
 * The TypeScript convention is that optional parameters
 * follow required paramenters
 * @param firstName 
 * @param lastName 
 */
function greet2(firstName: string, lastName?: string) : void {
    console.log(`Hello, ${firstName} ${lastName}.`);
}

greet2('Lukasz');

/**
 * Default value is defined by: = "value"
 * @param firstName 
 * @param lastName 
 */
function greet3(firstName: string, lastName: string = 'Juraszek') : void {
    console.log(`Hello, ${firstName} ${lastName}.`);
}

class Greeter {
    public firstName: string;

    /**
     * Here, this.firstName will work because we are using the arrow function.
     */
    constructor(firstName: string) {
        this.firstName = firstName;
    }
    sayHello() {
        setTimeout(() => {
            console.log(`Timeout: Hello ${this.firstName}.`);
        }, 500);
        console.log('Done');
        
    }
}

let g = new Greeter('Lukasz');
g.sayHello();