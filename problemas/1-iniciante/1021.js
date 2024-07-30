let valor = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

function calculaNotasEMoedas(valor) {
	console.log("NOTAS:");
	for (const nota of notas) {
		const qtdNota = parseInt(valor / nota);
		valor %= nota;
		console.log(`${qtdNota} nota(s) de R$ ${nota.toFixed(2)}`);
	}
	console.log("MOEDAS:");
	for (const moeda of moedas) {
		const qtdMoeda = parseInt(valor / moeda);
		valor = (valor % moeda) + 0.00001;
		console.log(`${qtdMoeda} moeda(s) de R$ ${moeda.toFixed(2)}`);
	}
}

calculaNotasEMoedas(valor);
