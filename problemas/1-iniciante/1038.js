let [codigo, qtd] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split(" ")
	.map(Number);

function totalLanche(cod, qtd) {
	if (cod == 1) return qtd * 4;
	else if (cod == 2) return qtd * 4.5;
	else if (cod == 3) return qtd * 5;
	else if (cod == 4) return qtd * 2;
	else return qtd * 1.5;
}

console.log(`Total: R$ ${totalLanche(codigo, qtd).toFixed(2)}`);
