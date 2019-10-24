/**
 * Here, the ': void' implies that the function
 * does not return anything
 * @param firstName
 * @param lastName
 */
function greet(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName);
}
greet('Lukasz', 'Juraszek');
/**
 * Optional parameters are marked by a question mark.
 * The TypeScript convention is that optional parameters
 * follow required paramenters
 * @param firstName
 * @param lastName
 */
function greet2(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName + ".");
}
greet2('Lukasz');
/**
 * Default value is defined by: = "value"
 * @param firstName
 * @param lastName
 */
function greet3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Juraszek'; }
    console.log("Hello, " + firstName + " " + lastName + ".");
}
var Greeter = /** @class */ (function () {
    /**
     *
     */
    function Greeter(firstName) {
        this.firstName = firstName;
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Timeout: Hello " + _this.firstName + ".");
        }, 500);
        console.log('Done');
    };
    return Greeter;
}());
var g = new Greeter('Lukasz');
g.sayHello();
