export const pedirCarta = (deck: string[]): string => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  return deck.pop() as string;
}