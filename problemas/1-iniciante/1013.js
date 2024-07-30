const [a, b, c] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split(" ")
	.map(Number);
const maior = Math.max(a, b, c);

console.log(`${maior} eh o maior`);
