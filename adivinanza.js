const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado === numeroSecreto) {
    console.log("FELICITACIONES! Adivinaste el número secreto.");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es MENOR. Sigue intentando.");
  } else {
    console.log("El número secreto es MAYOR. Sigue intentando.");
  }
};

module.exports = { generarNumeroAleatorio, verificarAdivinanza, };
