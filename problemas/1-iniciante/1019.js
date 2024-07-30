let segundos = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

const horas = parseInt(segundos / 3600);
segundos %= 3600;

const minutos = parseInt(segundos / 60);
segundos %= 60;

console.log(`${horas}:${minutos}:${segundos}`);
