import { pedirCarta } from './get-card';
import { crearCarta } from './create-card';
import { valorCarta } from './get-card-value';
import { mostrarPuntos } from './show-points';

export const turnoComputadora = (deck: string[], puntos: number, place: HTMLDivElement, place2: HTMLElement): number => {
  let puntosComputadora: number = 0;

  do {
    const carta: string = pedirCarta(deck);
    puntosComputadora += valorCarta(carta);
    crearCarta(carta, place);
    mostrarPuntos(puntosComputadora, place2);
  } while ((puntosComputadora < puntos) && (puntosComputadora < 21));

  return puntosComputadora;
}