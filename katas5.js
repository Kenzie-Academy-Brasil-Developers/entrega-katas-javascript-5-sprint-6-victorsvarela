// implemente aqui as funções de teste


// KATAS 01 //

const reverseString = (value) => {
    let valueReverse = '';
    let i = text.length - 1;
    while (i >= 0){
        valueReverse += text[i];
        i--;
    }
    return valueReverse;
}

const testeReverseString1 = () => {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testeReverseString2 = () => {
    let result = reverseString("Brasil acima de tudo, Deus acima de todos!");
    let expected = "!sodot ed amica sueD ,odut ed amica lisarB";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATAS 02 //

const reverseSentence = (value) => {
    let valueReverse = value.split(' ').reverse().join(' ');
    return valueReverse;
}

const testReverseSentence1 = () => {
    let result = reverseSentence('bob likes dogs');
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);

}

const testReverseSentence2 = () => {
    let result = reverseSentence('Antônio José Victor de Sousa Varela');
    let expected = 'Varela Sousa de Victor José Antônio';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATAS 03 //

const minimumValue = (value) => {
    let minValue = 0;
    
    for (let i = 0; i < value.length; i++){
        if (minValue > value[i]){
            minValue = value[i];
        }
    }
    
    return minValue;
}

const testMinimumValue1 = () => {
    let result = minimumValue([4, 5, 6, 1, 2, 0, 30]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testMinimumValue2 = () => {
    let result = minimumValue([33, 51, 10, -2, 0, -1, 100]);
    let expected = -2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}





// KATAS 04 //

const maximumValue = (value) => {
    let maxValue = 0;

    for (let i = 0; i < value.length; i++){
        if (maxValue < value[i]){
            maxValue = value[i];
        }
    }
    
    return maxValue;
}

const testMaximumValue1 = () => {
    let result = maximumValue([4, 5, 6, 1, 2, 0, 30]);
    let expected = 30;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testMaximumValue2 = () => {
    let result = maximumValue([33, 51, 10, -2, 0, -1, 100]);
    let expected = 100;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATAS 05 //

const calculateRemainder = (valueDivisor, valueDividendo) => {
    let restoDivisao = valueDivisor%valueDividendo;
    return restoDivisao;

}

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(10, 3);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(90, 9);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATAS 06 //

const distinctValues = (value) => {
    let arrValue = [];
    let newValue = value.split(' ');

    for (let i = 0; i < newValue.length; i++){
        if (arrValue.includes(newValue[i]) === false){
            arrValue.push(newValue[i]);
        }
    }

    arrValue.sort((a,b) => a-b);
    return arrValue.join(' ');
}

const testDistinctValues1 = () => {
    let result = distinctValues('1 3 5 3 7 3 1 1 5');
    let expected = '1 3 5 7';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testDistinctValues2 = () => {
    let result = distinctValues('3 3 3 4 10 10 7 1 0 2');
    let expected = '0 1 2 3 4 7 10';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATAS 07 //

const countValues = (value) => {
    let newValue = value.split(' ').sort((a,b) => a-b);
    let compararValue = [];
    let actual = '';
    let count = 0;
    let output = '';
    
    for (let i = 0; i < newValue.length; i++){
        actual = newValue[i];
        if (compararValue.includes(actual) === false){
            compararValue.push(actual);
            for (let j = 0; j < newValue.length; j++){
                if (newValue[j] === actual){
                    count++;
                }
            }
            
            output += `${actual}(${count}) `;
        }
        count = 0;
    }
    return output.trim();
}

const testCountValues1 = () => {
    let result = countValues('1 3 5 3 7 3 1 1 5');
    let expected = '1(3) 3(3) 5(2) 7(1)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCountValues2 = () => {
    let result = countValues('-1 0 -2 9 2 2 -1 0 90 -90');
    let expected = '-90(1) -2(1) -1(2) 0(2) 2(2) 9(1) 90(1)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}





// KATA 08 //

const evaluateExpression = (valueString, valueObject) => {
    let newValue = valueString.split(' ');
    let count = '';

    for (let i = 0; i < newValue.length; i++){
        for (let j in valueObject){
            if (newValue[i] === j){
                newValue[i] = valueObject[j]
            }
            if (count === ''){
                count = newValue[i]
            }
        }

        if (newValue[i-1] === '+'){
            count += newValue[i];
        }
        if (newValue[i-1] === '-'){
            count -= newValue[i];
        }
    }
    
    return count
    
}

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a - b + c - d", {a: 10, b: 29, c: 13, d: 1});
    let expected = -7
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}