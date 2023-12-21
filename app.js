const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));




const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInPound) {
    // Convertimos el valor a pounds.
    let valueInPound = valueToYen * 0.87;
    // Retornamos el valor en yenes
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }