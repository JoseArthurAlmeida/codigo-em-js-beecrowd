const [A, B, C] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const media = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
