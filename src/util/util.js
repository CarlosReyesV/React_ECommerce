/**
 * Function that calculates total price of new order
 * @param {Array} products cartProducts: array of objects
 * @returns {number} Total price
 * */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    sum = sum.toFixed(2);
    return sum
}