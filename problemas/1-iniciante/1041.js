const [x, y] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split(" ")
	.map(Number);

if (x == 0 && y == 0) {
	console.log(`Origem`);
} else if (x == 0) {
	console.log(`Eixo Y`);
} else if (y == 0) {
	console.log(`Eixo X`);
} else if (x > 0 && y > 0) {
	console.log(`Q1`);
} else if (x < 0 && y > 0) {
	console.log(`Q2`);
} else if (x < 0 && y < 0) {
	console.log(`Q3`);
} else if (x > 0 && y < 0) {
	console.log(`Q4`);
}
