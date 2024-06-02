import { shuffle } from 'underscore';

export const crearDeck = (tiposCarta: string[], tiposEspeciales: string[]): string[] => {
  const deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  return shuffle(deck);
}