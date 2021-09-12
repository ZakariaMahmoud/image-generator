function draw(options) {
  const { createCanvas } = require("canvas");

  const canvas = createCanvas(options.width, options.height);
  const context = canvas.getContext("2d");
  

  context.fillStyle = options.bgColor;
  context.fillRect(0, 0, options.width, options.height);
  if(options.text!= ""){
    context.font = options.font;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = options.color;
  }


  context.fillText(options.text, canvas.width / 2, canvas.height / 2);

  return canvas;
}

module.exports = draw;

