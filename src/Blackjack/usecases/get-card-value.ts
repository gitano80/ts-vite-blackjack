export const valorCarta = (carta: string): number => {
  let valor: number;
  carta = carta.substring(0, carta.length - 1);
  valor = parseInt(carta);
  if (isNaN(valor)) {
    (carta === 'A')
      ? valor = 11
      : valor = 10;
  }
  return valor;
}