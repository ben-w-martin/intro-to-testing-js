// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

const sayHello = (input) => {
    if (input === true) {
    return "Hello, World!";
    } else if (input === false) {
    return "Hello, World!";
    } else if (input === null) {
    return "Hello, World!";
    } else if (input === "") {
    return "Hello, World!";
    } else if (typeof input === "number") {
    return "Hello, World!";
    } else if (Array.isArray(input) === true) {
    return "Hello, World!";
    } else if (Number(input) === parseFloat(input)) {
    return "Hello, World!";
    } else if (isNaN(parseFloat(input)) === false) {
    return "Hello, World!";
    } else if (typeof input === "string" && input !== "Jane" && input !== "Alex" && input !== "Pat") {
    return "Hello, World!";
    } else {
    return `Hello, ${input}.`;
    }
}

console.log(isNaN("2a"));
console.log(isNaN(parseFloat("2a")) === false);
console.log(isNaN(parseFloat("fasdfa222")) === false);
// Left off on exercise 10