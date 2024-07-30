const [id, qtdHoras, valorHora] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map(Number);

const salario = qtdHoras * valorHora;

console.log(`NUMBER = ${id}\nSALARY = U$ ${salario.toFixed(2)}`);
