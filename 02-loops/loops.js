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
while (sukis) {
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
}
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




