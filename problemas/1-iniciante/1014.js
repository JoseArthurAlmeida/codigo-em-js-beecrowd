const [x, y] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);
const consumo = x / y;
console.log(`${consumo.toFixed(3)} km/l`);
