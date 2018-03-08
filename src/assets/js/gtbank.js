require("../less/gtbank.less");

let card = document.getElementById("card"),
	ctx = card.getContext("2d"),
	dimension = 90.5,
	mainColor = "#EE800E",
	gradientAlternation ="#FFC88D",
	mainStroke = "#fff";

// General properties
ctx.lineWidth = 1.5;

// First
let gradient = ctx.createLinearGradient(-10, -10, dimension, 50);
gradient.addColorStop(0, gradientAlternation);
gradient.addColorStop(.6, mainColor);
ctx.setTransform(1, 0.65, 0, 1, 0, -1);
ctx.beginPath();
ctx.rect(-1, -10, dimension, dimension);
ctx.fillStyle = gradient;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Second
let gradient1 = ctx.createLinearGradient(dimension, -10, 182, 50);
gradient1.addColorStop(0, gradientAlternation);
gradient1.addColorStop(1, mainColor);
ctx.setTransform(1, -0.65, 0, 1, 0, 66);
ctx.beginPath();
ctx.rect(dimension, 40, dimension, dimension);
ctx.fillStyle = gradient1;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Third
let gradient2 = ctx.createLinearGradient(172, -20, 274, 50);
gradient2.addColorStop(0, gradientAlternation);
gradient2.addColorStop(.6, mainColor);
ctx.setTransform(1, 0.65, 0, 1, 0, -120);
ctx.beginPath();
ctx.rect(182, -10, dimension, dimension);
ctx.fillStyle = gradient2;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Fourth
let gradient3 = ctx.createLinearGradient(404.5, 120.5, 274, -20);
gradient3.addColorStop(0, gradientAlternation);
gradient3.addColorStop(.4, mainColor);
ctx.setTransform(1, -0.65, 0, 1, 0, 185);
ctx.beginPath();
ctx.rect(274, 40, dimension, dimension);
ctx.fillStyle = gradient3;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Fifth
let gradient4 = ctx.createLinearGradient(413, -20, 362, 50);
gradient4.addColorStop(0, gradientAlternation);
gradient4.addColorStop(.6, mainColor);
ctx.setTransform(1, 0.65, 0, 1, 0, -236);
ctx.beginPath();
ctx.rect(362, -10, dimension, dimension);
ctx.fillStyle = gradient4;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Sixth
let gradient5 = ctx.createLinearGradient(-50, 147, dimension, 287.5);
gradient5.addColorStop(0, gradientAlternation);
gradient5.addColorStop(.75, mainColor);
ctx.setTransform(1, -0.65, 0, 1, 0, 0);
ctx.beginPath();
ctx.rect(-1, 197, dimension, dimension);
ctx.fillStyle = gradient5;
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Seventh
let gradient6 = ctx.createLinearGradient(222, 117, dimension, 287.5);
gradient6.addColorStop(0, gradientAlternation);
gradient6.addColorStop(.75, mainColor);
ctx.setTransform(1, 0.65, 0, 1, 0, -117);
ctx.beginPath();
ctx.rect(dimension, 197, dimension, dimension);
ctx.strokeStyle = mainStroke;
ctx.stroke();
ctx.fillStyle = gradient6;
ctx.fill();

// Eight
let gradient7 = ctx.createLinearGradient(142, 117, 272.5, 287.5);
gradient7.addColorStop(0, gradientAlternation);
gradient7.addColorStop(.75, mainColor);
ctx.setTransform(1, -0.65, 0, 1, 0, 119);
ctx.beginPath();
ctx.rect(182, 197, dimension, dimension);
ctx.strokeStyle = mainStroke;
ctx.stroke();
ctx.fillStyle = gradient7;
ctx.fill();

// Ninth
let gradient8 = ctx.createLinearGradient(234, 317.5, 272.5, 197);
gradient8.addColorStop(0, gradientAlternation);
gradient8.addColorStop(.75, mainColor);
ctx.setTransform(1, 0.65, 0, 1, 0, -236);
ctx.beginPath();
ctx.rect(274, 197, dimension, dimension);
ctx.strokeStyle = mainStroke;
ctx.stroke();
ctx.fillStyle = gradient8;
ctx.fill();

// Tenth
let gradient9 = ctx.createLinearGradient(324, 157, 454.5, 287.5);
gradient9.addColorStop(0, gradientAlternation);
gradient9.addColorStop(.75, mainColor);
ctx.setTransform(1, -0.65, 0, 1, 0, 236.5);
ctx.beginPath();
ctx.rect(364, 197, dimension, dimension);
ctx.strokeStyle = mainStroke;
ctx.stroke();
ctx.fillStyle = gradient9;
ctx.fill();

// Reset lines and transformations to default
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.lineWidth = 1;

/**
 * Main Content
 */

// GTBank Logo
// Main Square
ctx.beginPath();
ctx.rect(50, 15, 45, 45);
ctx.strokeStyle = mainStroke;
ctx.stroke();
ctx.fillStyle = mainColor;
ctx.fill();

// Main (Center) Square
ctx.beginPath();
ctx.rect(79, 24, 10, 10);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.strokeStyle = mainStroke;
ctx.stroke();

// Main Square Text
ctx.font = "bold 10px Open Sans";
ctx.fillText("GTBank", 54, 51);

// Main Square Text Caption
// Name
let captionY = 70;
ctx.font =  "7px Open Sans";
ctx.fillStyle = "#000";
ctx.fillText("Guaranty Trust Bank", 29, captionY);
// RC
let rcX = 72,
	rcY = captionY + 7;
ctx.font = "7px Open Sans Condensed";
ctx.fillText("RC", rcX, rcY); 
// No.
ctx.font = "7px Alegreya Sans SC";
ctx.fillText("152321", (rcX + 7), rcY);

// Panel
ctx.beginPath();
ctx.rect(38, 85, 55, 50);
ctx.fillStyle = "#FFCD00";
ctx.fill();

ctx.lineWidth = 1;
// Authorities' logos
// Container
ctx.beginPath();
ctx.moveTo(280, 110);
ctx.lineTo(280, 180);
ctx.arcTo(280, 210, 310, 210, 30);
ctx.lineTo(360, 210);
ctx.arcTo(390, 210, 390, 180, 30);
ctx.lineTo(390, 110);
ctx.arcTo(390, 80, 360, 80, 30);
ctx.lineTo(310, 80);
ctx.arcTo(280, 80, 280, 110, 30);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.stroke();
// First
ctx.beginPath();
ctx.moveTo(325, 90);
ctx.bezierCurveTo(285, 90, 285, 140, 325, 140);
ctx.lineTo(345, 140);
ctx.bezierCurveTo(385, 140, 385, 90, 345, 90);
ctx.fillStyle = "#D4DAD9";
ctx.fill();
// Second
ctx.beginPath();
ctx.arc(319.625, 172.5, 22.5, .25 * Math.PI, 1.75 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
// Third
ctx.beginPath();
ctx.arc(350.875, 172.5, 22.5, 0 * Math.PI, 2 * Math.PI, true);
ctx.fillStyle = "yellow";
ctx.fill();

// ctx.beginPath();
// ctx.moveTo(334.75, 155.75);
// ctx.arcTo(332.75, 172.5625, 334.75, 189.375, 2);
// ctx.lineTo(334.75, 189.375);
// ctx.lineTo(334.75, 189.375);
// 333.25