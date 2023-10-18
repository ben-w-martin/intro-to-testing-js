// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane.', when 'Jane' is passed.", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane.");
    });
    it("should return 'Hello, Alex.', when 'Alex' is passed.", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex.");
    });
    it("should return 'Hello, Pat!', when 'Alex' is passed.", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat.");
    });
    it("should return 'Hello, World!', when input === true", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input === false.", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input type 'null'", function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input === '' ", function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input is number with a decimal space.", function () {
        expect(sayHello(2.4)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input is a string with a number value", function () {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input is an array.", function () {
        expect(sayHello( [2, 3])).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input is a string beginning with numbers and containing letters.", function () {
        expect(sayHello( "2a")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!', when input is a string beginning with letters and containing numbers.", function () {
        expect(sayHello( "a2")).toBe("Hello, World!");
    });
});

describe("isFive", function () {
    it("should be defined as a function.", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return only boolean values", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true if 5 is passed", function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return true if '5' is passed", function () {
        expect(isFive("5")).toBe(true);
    });
    it("should return true if '5' is passed", function () {
        expect(isFive("5")).toBe(true);
    });


});