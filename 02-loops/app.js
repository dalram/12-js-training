// 1
for (let i=0; i < 5; i++) {
    console.log('Labas');
}
let labas = 'labas';
// 2
for (let i = 0; i <=4; i++) {
    console.log(i);
}
// 7
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('-------------------------------');

for (let i = 0; i < 5; i++) {
    console.log(rand(0, 10));
}

// 8
console.log('-------------------------------');

for (let i = 0; i < Infinity; i++) {
    let number = rand(0, 10);
    if (number !== 5) {
        console.log(number);
    } else {
        console.log(number);
        break;
    }
}
console.log('-------------------------------');
let number;
let sukis = true
do {
    number = rand(0, 10);
    console.log(number);
    if(number=== 5){
        sukis=false;
    }
} while (sukis);

// 9
console.log('-------------------------------');
let numbers = [];
for (let i = 0; i < 101; i++) {
    console.log(rand(0, 10));
    numbers.push(number);
    console.log(numbers.length);
}

// 10
console.log('-------------------------------');
let count = 0;
let sukis1 = true;
do {
    number = rand(0, 10);
    count++;
    console.log(number);
    if (number === 5 || number === 7) {
        sukis1 = false;
    }
} while (sukis1)
console.log('-------------------------------');
console.log(count);
console.log('-------------------------------');
count = 0;
sukis1 = true;
while (sukis1) {
    number = rand(0, 10);
    console.log(number);
    count++;
    if (number === 5 || number === 7) {
        sukis1 = false;
    }
}
console.log('-------------------------------');
console.log(count);

// 11
console.log('-------------------------------');
let suma = 0;
count = 0;
sukis1 = true;
do {
    number = rand(0, 10);
    console.log(number);
    suma += number;
    count++;
    if (count >= 11 && suma > 20) {
        sukis1 = false;
    }
} while (sukis1)
console.log('-------------------------------');
console.log(suma);
console.log(count);

// 12
count = 0;
sukis1 = true;
console.log('-------------------------------');
do {
     number = rand(0, 10);
     console.log(number);
     if (number % 2 !== 0) {
        count++;
     }
     if (count === 3) {
         sukis1 = false;
     }

} while (sukis1)
console.log('-------------------------------');
const skaiciukas = 4;
if ( skaiciukas % 2) {
    console.log('YE');
} else {
    console.log('NO');
}