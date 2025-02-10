/**
 * Esta función se encarga de darle el valor a la carta sea especial o normal
 * @param {string} carta Ejemplo: 'D9'
 * @returns {number} Valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}