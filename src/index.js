module.exports = function solveEquation(equation) {

    let aArr=[];

    let eqArr = equation.split('');

    let indexA = equation.search(/x/i);
    let checkMinus = false;

    for ( let i = 0; i<=indexA; i++){

        aArr.push(eqArr[i]);

    }

    let aCutIndex = aArr.slice(-4);
    let   aCutArr = aArr.slice(0, aArr.length - aCutIndex.length);

    let A = +aCutArr.join('');
//B
    eqArr.splice( 0, aArr.length);


    let equation2 = eqArr.join('');


    aArr = [];
    let indexB = equation2.search(/x/i);
    for ( let i = 0; i<=indexB; i++){

        aArr.push(eqArr[i]);

    }

    if (aArr[3] === '-'){
        checkMinus = true;
    }
    aCutIndex = aArr.slice(-4);
    aCutArr = aArr.slice(0, aArr.length - aCutIndex.length);
    aCutArr = aCutArr.slice(5);
    if (checkMinus === true){
        aCutArr.unshift('-');
        checkMinus = false;
    }

    let B = +aCutArr.join('');

    //C
    eqArr.splice( 0, aArr.length);

    if (eqArr[1] === '-'){
        checkMinus = true;
    }
    eqArr = eqArr.slice(3);
    if (checkMinus === true){
        eqArr.unshift('-');
        checkMinus = false;
    }

    let C = +eqArr.join('');
    let D  =B*B - 4*A*C;
    let D1 = B*(B-4*A*(C/B));


    let x1 = Math.round((-B + Math.sqrt(D))/(2*A));
    let x2 = Math.round((B*(-1) - Math.sqrt(D))/(2*A));
    let result = [x1, x2];


    return result.sort(function(a,b){return a - b});
}
