const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const [codigo1, numeroPeca1, valorPeca1] = input.shift().split(" ").map(Number);
const [codigo2, numeroPeca2, valorPeca2] = input.shift().split(" ").map(Number);

const total = numeroPeca1 * valorPeca1 + numeroPeca2 * valorPeca2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
