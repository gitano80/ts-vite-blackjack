export const crearCarta = (carta: string, place: HTMLDivElement): void => {
  const nuevaCarta: HTMLImageElement = document.createElement('img');

  nuevaCarta.src = `./assets/cartas/${carta}.png`;
  nuevaCarta.classList.add('cartas');
  place.append(nuevaCarta);
}