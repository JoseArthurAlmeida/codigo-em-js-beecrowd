const [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const [n1, n2, n3, n4] = a.split(" ").map(Number);

let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) console.log("Aluno aprovado.");
else if (media < 5.0) console.log("Aluno reprovado.");
else {
	console.log("Aluno em exame.");
	exame = Number(b);
	console.log(`Nota do exame: ${exame.toFixed(1)}`);
	const media_final = (media + exame) / 2;

	if (media_final >= 5.0) {
		console.log("Aluno aprovado.");
		console.log(`Media final: ${media_final.toFixed(1)}`);
	} else {
		console.log("Aluno reprovado.");
		console.log(`Media final: ${media_final.toFixed(1)}`);
	}
}
