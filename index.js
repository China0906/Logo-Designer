const { Square, Circle, Triangle } = require("./lib/shapes");
const SVG = require("./lib/svg");
const inquirer = require("inquirer")
const fs = require("fs");


inquirer.prompt(
    [
        {
            type: "input",
            name: "logoText",
            message: "Enter Logo text"
        },
        {
            type: "list",
            name: "shape",
            choices: ["Square", "Cirlce", "Triangle"],
            message: "choose a shape"
        },
        {
            type: "list",
            name: "textColor",
            choices: ["Red", "Blue", "Pink", "Black", "White", "Teal"],
            message: "choose text color"
        },
        {
            type: "list",
            name: "shapeColor",
            choices: ["Red", "Blue", "Pink", "Black", "White", "Teal"],
            message: "choose shape color"
        },
    ]
).then(userResponse => {
  console.log(userResponse)
    switch (userResponse.shape) {
        case "Square":
            let myUserShape1 = new Square(userResponse.shapeColor)
            let myUserSVG1 = new SVG(myUserShape1.render())
            myUserSVG1.setTextElement(userResponse.textColor, userResponse.logoText)
            let SVGCode1 = myUserSVG1.render()
            createSVGFile(SVGCode1);
            break;
        case "Triangle":
            let myUserShape2 = new Triangle(userResponse.shapeColor)
            let myUserSVG2 = new SVG(myUserShape2.render())
            myUserSVG2.setTextElement(userResponse.textColor, userResponse.logoText)
            let SVGCode2 = myUserSVG2.render()
            createSVGFile(SVGCode2);
            break;
        case "Circle":
            let myUserShape3 = new Circle(userResponse.shapeColor)
            let myUserSVG3 = new SVG(myUserShape3.render())
            myUserSVG3.setTextElement(userResponse.textColor, userResponse.logoText)
            let SVGCode3 = myUserSVG3.render()
            createSVGFile(SVGCode3);
            break;
    }
})


function createSVGFile(svgcode){
    console.log(svgcode)
    fs.writeFile("LOGO_OUTPUT.svg",svgcode,function(err){
        if(err) throw err;
    })
}