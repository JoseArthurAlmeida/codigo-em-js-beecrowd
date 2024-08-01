const letra = require("fs").readFileSync("/dev/stdin", "utf8");

console.log(letra.charCodeAt() - 64);
