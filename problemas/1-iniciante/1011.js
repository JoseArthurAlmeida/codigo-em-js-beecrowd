const raio = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

const volume = (4 / 3) * 3.14159 * raio ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);
