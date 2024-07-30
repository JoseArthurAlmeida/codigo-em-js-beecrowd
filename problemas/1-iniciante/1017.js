const [tempo, velocidade] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const litros = (tempo * velocidade) / 12;

console.log(litros.toFixed(3));
