const [A, B] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const media = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
