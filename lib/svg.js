const { text } = require("stream/consumers")

class SVG {
    constructor(shapeElement) {
        this.shapeElement = shapeElement
        this.textColor = ""
        this.textElement = ""
    }

    setTextElement(textColor, text) {
        this.textColor = textColor
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>


        `
    }

    render() {
        return `
<svg version "1.1" width"300" height="200" xmlns="http://www.w3.org/2000/svg">

${this.shapeElement}

${this.textElement}

<svg/>
        `
    }
}

module.exports = SVG