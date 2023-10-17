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
    } else if (isNaN(input) && isNaN(parseFloat(input)) === false){
    return "Hello, World!";
    } else {
    return `Hello, ${input}.`;
    }
}

console.log(isNaN("2a"));
console.log(isNaN(parseFloat("2a")) === false);
console.log(parseFloat("fasdfa"));

// What is true of "2a" that is not true of any other string?