const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Square, Triangle} = require('./shapes.js');

class CLI {
    run(){
        // Ask the user questions about shape, colors, and text
        inquirer.prompt([

            {
                type: "list",
                name: "shape",
                message: "What shape do you want?",
                choices: ["Circle", "Square", "Triangle"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "What color do you want the shape to be?"
            },
            {
                type: "input",
                name: "text",
                message: "Text that is no more than 3 characters:",
                validate: (response) => response.length <= 3 || "This text can only be less than or equal to 3 characters!"
            },
            {
                type: "input",
                name: "textColor",
                message: "What color do you want the text to be?"
            }

        // Conditionals that sort out the input from user
        ]).then(({shape, shapeColor, text, textColor}) => {
            let finalShape;

            switch(shape){
                case "Circle":
                    finalShape = new Circle();
                    break;
                case "Square":
                    finalShape = new Square();
                    break;
                case "Triangle":
                    finalShape = new Triangle();
                    break;
            }
            //Set the color of the shape using the inherited function .setColor(color)
            finalShape.setColor(shapeColor);

            //write the SVG file
            writeFile("logo.svg", generateSVG(finalShape, text, textColor));
        })
    }
}

//Takes in shape, text, and textColor to generate the code for SVG file
function generateSVG(shape, text, textColor){
    return`
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

module.exports = CLI;