const soma = require("fs")
	.readFileSync("../../input/stdin", "utf8")
	.split("\n")
	.map(Number)
	.reduce((acumulador, valoratual) => acumulador + valoratual, 0);

console.log(`X = ${soma}`);