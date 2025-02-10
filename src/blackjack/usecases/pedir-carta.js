/**
 * Esta función permite tomar una carta de la baraja
 * @param {array<string>} deck Ejemplo: ['D10, H4, ...]
 * @returns {<string>} Retorna una carta de tipo String
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}