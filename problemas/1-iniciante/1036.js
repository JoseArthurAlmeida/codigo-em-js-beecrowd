const [a, b, c] = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.split(" ")
	.map(Number);

const delta = b ** 2 - 4 * a * c;

if (delta > 0 && a != 0) {
	const R1 = (-b + Math.sqrt(delta)) / (2 * a);
	const R2 = (-b - Math.sqrt(delta)) / (2 * a);
	console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
} else {
	console.log("Impossivel calcular");
}
