let dias = Number(require("fs").readFileSync("/dev/stdin", "utf8"));

let anos = parseInt(dias / 365);
dias %= 365;

let meses = parseInt(dias / 30);
dias %= 30;

console.log(`${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`);
