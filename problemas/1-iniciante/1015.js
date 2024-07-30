const [p1, p2] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const [x1, y1] = p1.split(" ").map(Number);
const [x2, y2] = p2.split(" ").map(Number);

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distancia.toFixed(4));
