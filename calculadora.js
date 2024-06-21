const vitorias = 10;
const derrotas = 9;

function calcular(vitorias, derrotas) {
  return vitorias - derrotas;
}

function rankear(saldo) {
  let nivel;

  if (saldo < 10) {
    nivel = "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = "Lendário";
  } else if (saldo >= 101) {
    nivel = "Bronze";
  }

  return nivel;
}

function calcularRanking(vitorias, derrotas) {
  const saldo = calcular(vitorias, derrotas);
  const nivel = rankear(saldo);
  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

calcularRanking(vitorias, derrotas);
