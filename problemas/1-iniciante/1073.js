const numero = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

for (let index = 2; index <= numero; index += 2) {
	console.log(`${index}^2 = ${index ** 2}`);
}
