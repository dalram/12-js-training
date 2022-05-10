console.log('hi');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1
// a
let number1 = rand(5, 25);
let number2 = rand(5, 25);
let number3 = rand(5, 25);
let suma = number1 + number2 + number3;
console.log(suma);
// b
let numbersString = ''+ number1 + number2 + number3;
console.log(numbersString);
// c
let spacedNumbers = ''+ number1 + ' ' + number2 + ' ' + number3;
spacedNumbers = `${number1} ${number2} ${number3}`;
console.log(`${spacedNumbers} ${suma}`);


// 
console.log('=====================================');
function createVariables(){
    var accounts = [];
  
    for (var i = 0; i < 20; ++i) {
        accounts[i] = rand(0, 25);
    }
  
    return accounts;
  }
  console.log(createVariables()); // generuojam array is norimu reiksmiu (norimas reiksmes nurodom accounts[i] = 'whatever')

//   2
const kintamasis = rand(5, 10);
console.log(kintamasis);

// 3
const labas = 'labas';
for (let i = 0; i < 5; i++) {
    console.log(labas);
}

//  4
for (let i = 0; i < 7; i++) {
    console.log(kintamasis);
}

// 5
console.log('=====================================');
for (let i = 0; i < kintamasis; i++) {
    console.log(kintamasis);
}

// 6
console.log('=====================================');
let cikloIlgis;
if (kintamasis > 7) {
    for (let i=0; i <kintamasis; i++) {
        console.log(kintamasis);
    }
}
// 7
console.log('=====================================');
let number =0;
// b
for (let i = 0; i < 5; i++) {
    number = rand(10, 20) + number;
}
console.log(number);
console.log('=====================================');
// c
let numeris;
let zodis = '';
// d
suma =0;
for (let i = 0; i < 5; i++) {
    numeris = rand(10, 20);
    zodis += numeris + ' ';
    suma += numeris;
}
console.log(zodis + suma);

// 8
console.log('=====================================');
let skaicius;
let sukis = true;
count = 0;
suma = 0;
let didesniSkaiciai = 0;
let didesniuSuma = 0;
let evenCount = 0;
let unevenCount = 0;
do {
    skaicius = rand(10, 25);
    console.log(skaicius);
    count++;
    if (skaicius <= 18) {
        suma +=skaicius;
    } else {
        didesniSkaiciai++;
        didesniuSuma +=skaicius;
    }
    if (skaicius % 2 === 0){
        evenCount++;
    } else {
        unevenCount++;
    }

    if (skaicius < 12 && count > 20 ) { //f pridejau && count > 20
        sukis = false;
    }
} while (sukis)
console.log('=====================================');
console.log(count);
console.log(suma); // iki c
console.log('=====================================');
console.log(didesniSkaiciai);
console.log(didesniuSuma); //d
console.log('=====================================');
console.log(evenCount);
console.log(unevenCount); //e
console.log('=====================================');
console.log(count); //f

// 9
console.log('=====================================');
// A
let randNum;
let inside = 0;
let outside = 0;
while (randNum !== 5) {
    randNum = rand(5, 10);
    inside++;
    for (let i = 0; i < randNum; i++) {
        outside++;
    }
}
console.log(inside);
console.log(outside);
// B
console.log('=====================================');
let randNum1;
let inside1 = 0;
let outside1 = 0;
let fivesCounter = 0;
 do {
    randNum1 = rand(5, 10);
    inside1++;
    for (let i = 0; i < randNum1; i++) {
        outside1++;
    }
    if (randNum1 === 5) {
        fivesCounter++;
    }
} while (fivesCounter < 3)
console.log(inside1);
console.log(outside1);

// C ?????????????????
console.log('=====================================');
let randNum2;
let inside2 = 0;
let outside2 = 0;
let fivesCounter1 = 0;
let lastNum;
let lastNumToLast = false;
 do {
    randNum2 = rand(5, 10);
    console.log(randNum2);
    inside2++;
    for (let i = 0; i < randNum2; i++) {
        outside2++;
    }
    if (randNum2 === 5) {
        fivesCounter1++;
    } else {
        fivesCounter1 = 0;
    }
    
} while (fivesCounter1 < 3)

console.log('=====================================');
console.log(inside2);
console.log(outside2);




// console.log('=====================================');
// // 10
// let sumaPetras = 0;
// let sumaKazys = 0;
// let randNum3;
// let randNum4;
// suma = true;
// do {
//     randNum3 = rand(10, 20);
//     randNum4 = rand(5, 25);
//     sumaPetras += randNum3;
//     sumaKazys += randNum4;
//     if (randNum3 > randNum4) {
//         console.log(`Partija laimejo Petras su ${randNum3}, jo tasku suma ${sumaPetras}. Kazio tasku suma ${sumaKazys}`);
//     } else if (randNum4 > randNum3) {
//         console.log(`Partija laimejo Kazys su ${randNum4}, jo tasku suma ${sumaKazys}. Petro tasku suma ${sumaPetras}`); 
//     } else {
//         console.log(`Partija baigesi lygiosiomis ${randNum3}, ${randNum4}. Petro tasku suma ${sumaPetras}, Kazio tasku suma ${sumaKazys}`);
//     }
//     if (sumaPetras >= 222 || sumaKazys >= 222) {
//         suma = false;
//     }
// } while (suma)
// if (sumaPetras >= 222 && sumaKazys < 222) {
//     console.log(`Petras laimejo zaidima.`);
// } else if (sumaKazys >= 222 && sumaPetras < 222) {
//     console.log(`Kazys laimejo zaidima.`);
// } else if (sumaPetras >= 222 && sumaKazys >= 222) {
//     console.log(`Lygiosios`);
// }


// console.log('=====================================');
// // codewars uzdavinys Stanton measure
// function stantonMeasure(arr){
//     return arr.filter(el=> el === (arr.filter(e => e === 1).length) ).length
//   }
// let farray = [1, 4, 3, 2, 1, 2, 3, 2];
// console.log(stantonMeasure(farray));