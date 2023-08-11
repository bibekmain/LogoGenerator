const {Circle, Square, Triangle} = require('./shapes');

describe("Triangle Test", () => {
    test("The shape should match a circle and color should match black", () => {
        const shape = new Circle();
        shape.setColor("Black");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="Black" />');
    });

    test("The shape should match a square and color should match red", () => {
        const shape = new Square();
        shape.setColor("Red");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="Red" />');
    });

    test("The shape should match a triangle and color should match blue", () => {
        const shape = new Triangle();
        shape.setColor("Blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="Blue" />');
    });
});