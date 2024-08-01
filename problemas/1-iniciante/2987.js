const letra = require("fs")
	.readFileSync("/dev/stdin", "utf8")
	.trim()
	.toLocaleLowerCase();
const alfabeto = "abcdefghijklmnopqrstuvwxyz";

for (let index = 0; index < alfabeto.length; index++) {
	if (letra == alfabeto[index]) {
		console.log(index + 1);
	}
}
