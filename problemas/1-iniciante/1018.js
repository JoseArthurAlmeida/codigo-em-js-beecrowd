let valor = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (const nota of notas) {
	const qtdNotas = parseInt(valor / nota);
	valor %= nota;
	console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
}
