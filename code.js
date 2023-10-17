// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

const sayHello = (input) => {
    console.log(`Hello, ${input}.`);
    if (input === "Alex") {
        return "Hello, Alex.";
    } else if (input === "Jane") {
        return "Hello, Jane.";
    } else {
        return "Hello, Pat!";
    }
}