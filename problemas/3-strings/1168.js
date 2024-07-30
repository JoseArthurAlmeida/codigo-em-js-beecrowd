const lines = require("fs").readFileSync("/dev/stdin", "utf-8").split("\n");

const qtdCasosDeTeste = Number(lines.shift());
let qtdLeds = 0;

for (let i = 0; i < qtdCasosDeTeste; i++) {
	let numero = lines.shift();
	let tamanhoNumero = numero.length;

	for (let i = 0; i < tamanhoNumero; i++) {
		if ("069".includes(numero[i])) {
			qtdLeds += 6;
		} else if ("235".includes(numero[i])) {
			qtdLeds += 5;
		} else if (numero[i] == 1) {
			qtdLeds += 2;
		} else if (numero[i] == 4) {
			qtdLeds += 4;
		} else if (numero[i] == 7) {
			qtdLeds += 3;
		} else if (numero[i] == 8) {
			qtdLeds += 7;
		}
	}
	console.log(`${qtdLeds} leds`);
	qtdLeds = 0;
}
