import { crearDeck, pedirCarta, valorCarta, crearCarta, turnoComputadora, mostrarPuntos } from './usecases'

let deck: string[];
const tipos: string[] = ['C', 'D', 'H', 'S'],
  especiales: string[] = ['A', 'J', 'Q', 'K']

let puntosJugadores: number[] = [];

//Referencias HTML
const btnPedir: HTMLButtonElement = document.querySelector('#btnPedir')!,
  btnDetener: HTMLButtonElement = document.querySelector('#btnDetener')!,
  btnNuevo: HTMLButtonElement = document.querySelector('#btnNuevo')!;

const divPuntajes: NodeListOf<HTMLElement> = document.querySelectorAll('small'),
  divCartas: NodeListOf<HTMLDivElement> = document.querySelectorAll('.div-cartas');

//Esta funcion inicializa el juego
const inicializarJuego = (numeroJugadores: number = 2): void => {
  deck = crearDeck(tipos, especiales);
  puntosJugadores = [];
  for (let i = 0; i < numeroJugadores; i++) {
    puntosJugadores.push(0);
  }
  divPuntajes.forEach(element => element.innerText = '0');
  divCartas.forEach(element => element.innerHTML = '');
  btnPedir.disabled = false;
  btnDetener.disabled = false;
}

const determinarGanador = (): void => {
  const [puntos, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    (puntosComputadora === puntos)
      ? alert('EMPATE')
      : ((puntos > 21) || (puntosComputadora <= 21))
        ? alert('PERDISTE')
        : alert('GANASTE');
  }, 200);
}


//Eventos
btnPedir.addEventListener('click', () => {
  const carta: string = pedirCarta(deck);
  puntosJugadores[0] += valorCarta(carta);
  crearCarta(carta, divCartas[0]);
  mostrarPuntos(puntosJugadores[0], divPuntajes[0]);

  if (puntosJugadores[0] > 21 || puntosJugadores[0] === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    puntosJugadores[puntosJugadores.length - 1] = turnoComputadora(deck, puntosJugadores[0], divCartas[1], divPuntajes[1]);
    determinarGanador();
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  puntosJugadores[puntosJugadores.length - 1] = turnoComputadora(deck, puntosJugadores[0], divCartas[1], divPuntajes[1]);
  determinarGanador();
})

btnNuevo.addEventListener('click', () => {
  inicializarJuego();
})

inicializarJuego();