/**
 * Esta función permite tomar una carta de la baraja
 * @param {array<string>} deck Ejemplo: ['D10, H4, ...] es un arreglo de String
 * @returns {<string>} Retorna una carta de tipo String
 */

export const pedirCarta = (deck) => {

    if ( ! deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}