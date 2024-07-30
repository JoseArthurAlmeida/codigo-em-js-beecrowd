const [nome, salario, vendas] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split("\n");

const novoSalario = Number(salario) + (15 / 100) * Number(vendas);

console.log(`TOTAL = R$ ${novoSalario.toFixed(2)}`);
