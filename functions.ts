/**
 * This is an example of a standard JavaScript function
 * @param firstName 
 * @param lastName 
 */
function greet(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

/**
 * This function provides type definition
 * @param firstName 
 * @param lastName 
 */
function greet2(firstName: string, lastName: string) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

/**
 * This function defines return type
 * @param firstName 
 * @param lastName 
 */
function greet3(firstName: string, lastName: string) : void {
    console.log(`Hello, ${firstName} ${lastName}`);
}

/**
 * This function accepts a required parameter, but also an optional one
 * @param firstName 
 * @param lastName 
 */
function greet4(firstName: string, lastName?: string) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

/**
 * This function accepts a required parameter, but also an optional parameter
 * with a default value.
 * @param firstName 
 * @param lastName 
 */
function greet5(firstName: string, lastName: string = 'Juraszek') {
    console.log(`Hello, ${firstName} ${lastName}`);
}