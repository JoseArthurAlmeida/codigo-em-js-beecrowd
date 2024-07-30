const [A, B, C] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split(" ")
	.map(Number);

const triangulo = (A * C) / 2;
const circulo = 3.14159 * C ** 2;
const trapezio = ((A + B) * C) / 2;
const quadrado = B * B;
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`);
