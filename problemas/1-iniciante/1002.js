const raio = Number(require("fs").readFileSync("/dev/stdin", "utf8"));
const area = 3.14159 * raio ** 2;

console.log(`A=${area.toFixed(4)}`);
