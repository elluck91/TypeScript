export {};

class Greeter {
    public firstName: string;

    /**
     *
     */
    constructor(firstName: string) {
        this.firstName = firstName;
    }

    /**
     * Due to setTimeout, the function loses its context
     */
    sayHello() {
        setTimeout(function() {
            console.log(`Hello, ${this.firstName}`);
        }, 500)
    }

    /**
     * Using => 'fat arrow' helps us maintain the context
     */
    sayHello2() {
        setTimeout(() => {
            console.log(`Hello, ${this.firstName}`);
        }, 500);
    }
}

let greeter = new Greeter('Lukasz');
greeter.sayHello();

greeter.sayHello2();