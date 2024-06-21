const vitorias = 1000;
const derrotas = 9;

function calcular(vitorias, derrotas) {
  return vitorias - derrotas;
}

function rankear(vitorias) {
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Bronze";
  }

  return nivel;
}

function calcularRanking(vitorias, derrotas) {
  const saldo = calcular(vitorias, derrotas);
  const nivel = rankear(vitorias);
  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

calcularRanking(vitorias, derrotas);
