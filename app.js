const readlineSync = require("readline-sync");

const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return readlineSync.question("Ingrese un numero: ");
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;

  console.log("¡BIENVENIDO A ADIVINA EL NUMERO SECRETO!");
  console.log("Intenta adivinar el número del 1 al 100.\n");

  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
};
juegoAdivinanza();
