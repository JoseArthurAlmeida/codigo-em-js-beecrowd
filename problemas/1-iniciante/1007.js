const [A, B, C, D] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const diferenca = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`);
