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

// const sayHello = (input) => {
//     switch (input) {
//         case input === true:
//         case input === false:
//         case input === null:
//         case input === "":
//         case typeof input === "number":
//         case Array.isArray(input) === true:
//         case Number(input) === parseFloat(input):
//         case isNaN(parseFloat(input)) === false:
//         case typeof input === "string" && input !== "Jane" && input !== "Alex" && input !== "Pat":
//             return "Hello, World!";
//             break;
//         default:
//             return `Hello, ${input}.`;
//             break;
//     }
// }

console.log(isNaN("2a"));
console.log(isNaN(parseFloat("2a")) === false);
console.log(isNaN(parseFloat("fasdfa222")) === false);
// Left off on exercise 10

const isFive = (input) => {
    if (input == 5) {
        return true;
    } else {
        return false;
    }
}

const isEven = (input) => {
    return typeof input === "boolean" ? false : (input % 2 === 0) === true;
}