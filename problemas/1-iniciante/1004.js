const [A, B] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const produto = A * B;

console.log(`PROD = ${produto}`);
