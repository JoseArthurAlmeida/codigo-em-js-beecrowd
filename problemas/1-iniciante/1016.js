const distancia = Number(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(`${distancia * 2} minutos`);
