"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log('sumFor:', sum);
    return sum;
}
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    console.log('sumWhile:', sum);
    return sum;
}
function sumRecursion(numbers, index = 0) {
    if (index === numbers.length) {
        return 0;
    }
    return numbers[index] + sumRecursion(numbers, index + 1);
}
function sumTheFunctionalWay(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('sumTheFunctionalWay:', sum);
    return sum;
}
const numbers = [1, 2, 3, 4];
sumFor(numbers);
sumWhile(numbers);
console.log('sumRecursion:', sumRecursion(numbers));
sumTheFunctionalWay(numbers);
