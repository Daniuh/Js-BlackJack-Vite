import { showModalAlert } from '../presentation/user-modal-alert/user-modal-alert';
import { crearCartaHTML, pedirCarta, valorCarta } from './';

let contadorJugador     = 0,
    contadorComputadora = 0;

/**
 * Esta función crea o da paso al turno de la computadora
 * @param {number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar la carta
 * @param {array<string>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck = []) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesarios');

    let puntosComputadora   = 0,
        whoWon              = '';

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            whoWon = 'Nadie gana :(';
            showModalAlert(whoWon);
        } else if ( puntosMinimos > 21 ) {
            whoWon = 'Computadora gana';
            showModalAlert(whoWon);
            contadorComputadora++;
            countersComputer(contadorComputadora);
            console.log(contadorComputadora);
        } else if( puntosComputadora > 21 ) {
            whoWon = 'Has Ganado';
            showModalAlert(whoWon);
            contadorJugador++;
            countersUser(contadorJugador);
            console.log(contadorJugador);
        } else {
            whoWon = 'Computadora Gana';
            showModalAlert(whoWon);
            contadorComputadora++;
            countersComputer(contadorComputadora);
            console.log(contadorComputadora);
        }
    }, 100 );
}

export const countersComputer = (contadorComputadora) => {
    localStorage.setItem('counterComputer', contadorComputadora);
}

export const countersUser = (contadorJugador) => {
    localStorage.setItem('counterUser', contadorJugador);
}

export const clearCounterStorage = () => {
    contadorJugador     = 0;
    contadorComputadora = 0;
    localStorage.removeItem('counterUser', 0);
    localStorage.removeItem('counterComputer', 0);
}