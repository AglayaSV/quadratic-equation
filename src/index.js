module.exports = function solveEquation(equation) {
    let numbers = equation.match(/\d+/g).map(Number);
    let operators = equation.match(/[+]|-/g);
    if (operators.length < 3) operators.unshift('+');
    let A = +(`${operators[0]}${numbers[0]}`);
    let B = +(`${operators[1]}${numbers[2]}`);
    let C = +(`${operators[2]}${numbers[3]}`);
    let D = B * B - 4 * A * C;
    let x1 = Math.round((-B + Math.sqrt(D)) / (2 * A));
    let x2 = Math.round((B * (-1) - Math.sqrt(D)) / (2 * A));
    let result = [x1, x2];

    return result.sort((a, b) => a - b);
};
